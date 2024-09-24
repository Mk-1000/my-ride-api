import { Ride } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';
export declare class RideController {
    private readonly rideService;
    constructor(rideService: RideService);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
}
