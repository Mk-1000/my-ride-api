import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as FormData from 'form-data'; // For handling form-data uploads
import * as fs from 'fs';
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
    const savedVerification = await this.verificationRepository.save(verification);

    // Trigger background verification after successful creation
    setImmediate(() => this.verifyImages(savedVerification.id));

    return savedVerification;
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

  async delete(id: number): Promise<void> {
    const result = await this.verificationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Verification with ID ${id} not found`);
    }
  }

  async updateStatus(id: number, updateStatusDto: UpdateVerificationStatusDto): Promise<Verification> {
    const verification = await this.findOne(id);
    verification.verificationStatus = updateStatusDto.verificationStatus;
    verification.verificationDate = new Date();
    verification.verifiedBy = updateStatusDto.verifiedBy;

    return this.verificationRepository.save(verification);
  }

  async verifyImages(id: number): Promise<void> {
    try {
      const verification = await this.findOne(id);

      if (!verification) {
        throw new NotFoundException(`Verification with ID ${id} not found`);
      }

      const documentImageUrl = verification.documentImageUrl.url;
      const selfieWithDocumentUrl = verification.selfieWithDocumentUrl.url;

      // Read the image files
      const documentImage = fs.createReadStream(documentImageUrl);
      const selfieImage = fs.createReadStream(selfieWithDocumentUrl);

      // Prepare form-data for Flask API
      const formData = new FormData();
      formData.append('documentImage', documentImage);
      formData.append('selfieImage', selfieImage);

      // Send the request to Flask API for face verification
      const flaskApiUrl = 'http://127.0.0.1:5000/upload'; // Flask API URL
      const response = await axios.post(flaskApiUrl, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      // Handle Flask response
      if (response.data.message === 'Face verified successfully!') {
        // Update verification status to APPROUVE
        verification.verificationStatus = VerificationStatus.APPROUVE;
      } else {
        // Update verification status to REJECTED if not matching
        verification.verificationStatus = VerificationStatus.REJECTED;
      }

      verification.verificationDate = new Date();
      await this.verificationRepository.save(verification);

      console.log(`Verification ${id} result: ${response.data.message}`);
    } catch (error) {
      console.error(`Failed to verify images for Verification ID ${id}: ${error.message}`);
    }
  }
}
