import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Rider } from '../entities/rider.entity';
import { CreateRiderDto } from './dto/create-rider.dto';

@Injectable()
export class RiderService {
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
  ) {}

  // Create a new rider
  async createRider(createRiderDto: CreateRiderDto): Promise<Rider> {
    try {
      const hashedPassword = await bcrypt.hash(createRiderDto.user.password, 10);

      const newRider = this.riderRepository.create({
        ...createRiderDto.user,
        encryptedPassword: hashedPassword,
        userType: 'RIDER',
        licenseNumber: createRiderDto.licenseNumber,
        licenseImageUrl: createRiderDto.licenseImageUrl,
      });

      return await this.riderRepository.save(newRider);
    } catch (error) {
      console.error('Error creating rider:', error);
      throw new InternalServerErrorException('Failed to create rider');
    }
  }

  // Find all riders
  async findAll(): Promise<Rider[]> {
    return this.riderRepository.find();
  }

  // Find a specific rider by ID
  async findOne(id: number): Promise<Rider> {
    const rider = await this.riderRepository.findOne({ where: { id } });

    if (!rider) {
      throw new NotFoundException(`Rider with ID ${id} not found`);
    }

    return rider;
  }
}
