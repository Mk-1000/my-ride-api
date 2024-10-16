import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Repository } from 'typeorm';
import { Verification, VerificationStatus } from '../entities/verification.entity';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationStatusDto } from './dto/update-verification.dto';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private verificationRepository: Repository<Verification>,
  ) {}

  async create(createVerificationDto: CreateVerificationDto): Promise<Verification> {
    const verification = this.verificationRepository.create(createVerificationDto);
    return this.verificationRepository.save(verification);
  }

  async findAll(): Promise<Verification[]> {
    return this.verificationRepository.find({ relations: ['documentImageUrl', 'selfieWithDocumentUrl'] });
  }

  async findOne(id: number): Promise<Verification> {
    const verification = await this.verificationRepository.findOne({
      where: { id },
      relations: ['documentImageUrl', 'selfieWithDocumentUrl'],
    });

    if (!verification) {
      throw new NotFoundException(`Verification with ID ${id} not found`);
    }

    return verification;
  }

  async updateStatus(id: number, updateStatusDto: UpdateVerificationStatusDto): Promise<Verification> {
    const verification = await this.findOne(id);
    verification.verificationStatus = updateStatusDto.verificationStatus;
    verification.verificationDate = new Date();
    verification.verifiedBy = updateStatusDto.verifiedBy;
    
    return this.verificationRepository.save(verification);
  }
  async verifyImages(id: number): Promise<string> {
    const verification = await this.findOne(id);

    if (!verification) {
      throw new NotFoundException(`Verification with ID ${id} not found`);
    }

    const documentImageUrl = verification.documentImageUrl.url;
    const selfieWithDocumentUrl = verification.selfieWithDocumentUrl.url;

    try {
      // Send the request to Flask API for face verification
      const flaskApiUrl = 'http://127.0.0.1:5000/upload'; // Flask API URL
      const formData = {
        documentImage: documentImageUrl,
        selfieImage: selfieWithDocumentUrl,
      };

      const response = await axios.post(flaskApiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.message === 'Face verified successfully!') {
        // Update verification status to APPROUVE
        verification.verificationStatus = VerificationStatus.APPROUVE;
      } else {
        // Update verification status to REJECTED if not matching
        verification.verificationStatus = VerificationStatus.REJECTED;
      }

      verification.verificationDate = new Date();
      await this.verificationRepository.save(verification);

      return response.data.message;
    } catch (error) {
      throw new Error(`Failed to verify images: ${error.message}`);
    }
  }
}
