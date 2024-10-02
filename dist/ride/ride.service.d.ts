import { BookingService } from 'src/booking/booking.service';
import { Repository } from 'typeorm';
import { CarService } from '../car/car.service';
import { Ride, RideStatus } from '../entities/ride.entity';
import { LocationService } from '../location/location.service';
import { RiderService } from '../rider/rider.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
export declare class RideService {
    private rideRepository;
    private locationService;
    private riderService;
    private carService;
    private bookingService;
    constructor(rideRepository: Repository<Ride>, locationService: LocationService, riderService: RiderService, carService: CarService, bookingService: BookingService);
    create(createRideDto: CreateRideDto): Promise<Ride>;
    findAll(): Promise<Ride[]>;
    findOne(id: number): Promise<Ride>;
    update(id: number, updateRideDto: UpdateRideDto): Promise<Ride>;
    remove(id: number): Promise<void>;
    findByStatus(status: RideStatus): Promise<Ride[]>;
}
