import { Car } from '../entities/car.entity';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    create(createCarDto: CreateCarDto): Promise<Car>;
    findAll(): Promise<Car[]>;
}
