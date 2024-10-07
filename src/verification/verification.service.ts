import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Verification } from '../entities/verification.entity';
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
}
