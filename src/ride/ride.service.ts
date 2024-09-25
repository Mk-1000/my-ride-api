import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
import { Ride } from '../entities/ride.entity';
import { LocationService } from '../location/location.service';
import { RiderService } from '../rider/rider.service';
import { CreateRideDto } from './dto/create-ride.dto';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private rideRepository: Repository<Ride>,
    private locationService: LocationService,
    private riderService: RiderService,
    private carService: CarService,
  ) {}

  async create(createRideDto: CreateRideDto): Promise<Ride> {
    const driver = await this.riderService.findOne(createRideDto.driverId);
    const car = await this.carService.findOne(createRideDto.carId);

    const startLocation = await this.locationService.create(createRideDto.startLocation);
    const endLocation = await this.locationService.create(createRideDto.endLocation);

    const ride = this.rideRepository.create({
      ...createRideDto,
      driver,
      car,
      startLocation,
      endLocation,
    });

    return this.rideRepository.save(ride);
  }

  async findAll(): Promise<Ride[]> {
    return this.rideRepository.find({ relations: ['driver', 'car', 'startLocation', 'endLocation'] });
  }

  async findOne(id: number): Promise<Ride> {
    return this.rideRepository.findOne({ where: { id }, relations: ['driver', 'car', 'startLocation', 'endLocation'] });
  }
}
