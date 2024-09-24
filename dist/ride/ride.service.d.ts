import { Repository } from 'typeorm';
import { Ride } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
export declare class RideService {
    private rideRepository;
    constructor(rideRepository: Repository<Ride>);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
}
