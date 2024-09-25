import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
import { Ride } from '../entities/ride.entity';
import { LocationService } from '../location/location.service';
import { RiderService } from '../rider/rider.service';
import { CreateRideDto } from './dto/create-ride.dto';
export declare class RideService {
    private rideRepository;
    private locationService;
    private riderService;
    private carService;
    constructor(rideRepository: Repository<Ride>, locationService: LocationService, riderService: RiderService, carService: CarService);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
    findOne(id: number): Promise<Ride>;
}
