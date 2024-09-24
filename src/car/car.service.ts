import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const rider = await this.riderService.findOne(createCarDto.riderId);  // Find the rider by ID
    const car = this.carRepository.create({ ...createCarDto, rider });
    return this.carRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find({ relations: ['rider'] });
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne({
      where: { id },
      relations: ['rider'], // Corrected the relation to 'rider'
    });

    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }
}
