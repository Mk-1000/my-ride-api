import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { RiderService } from '../rider/rider.service';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    private riderService: RiderService,
  ) {}

  async create(riderId: number, createCarDto: CreateCarDto): Promise<Car> {
    const rider = await this.riderService.findOne(riderId);  // Find the rider by ID
    const car = this.carRepository.create({ ...createCarDto, rider });
    return this.carRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find({ relations: ['rider'] });
  }
}
