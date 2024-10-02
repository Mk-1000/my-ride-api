import { Ride, RideStatus } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { RideService } from './ride.service';
export declare class RideController {
    private readonly rideService;
    constructor(rideService: RideService);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
    findOne(id: number): Promise<Ride>;
    update(id: number, updateRideDto: UpdateRideDto): Promise<Ride>;
    remove(id: number): Promise<void>;
    findByStatus(status: RideStatus): Promise<Ride[]>;
}
