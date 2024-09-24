import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
  ) {}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const ride = this.rideRepository.create(createRideDto);
    return this.rideRepository.save(ride);
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find();
  }
}
