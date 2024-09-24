import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { RiderService } from '../rider/rider.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarService {
    private carRepository;
    private riderService;
    constructor(carRepository: Repository<Car>, riderService: RiderService);
    create(riderId: number, createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
}
