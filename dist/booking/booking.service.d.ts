import { CustomerService } from 'src/customer/customer.service';
import { RideService } from 'src/ride/ride.service';
import { Repository } from 'typeorm';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingService {
    private bookingRepository;
    private rideService;
    private customerService;
    constructor(bookingRepository: Repository<Booking>, rideService: RideService, customerService: CustomerService);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    acceptBooking(id: number): Promise<Booking>;
    refuseBooking(id: number): Promise<Booking>;
    findByRideId(rideId: number): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    delete(id: number): Promise<void>;
    removeByRideId(rideId: number): Promise<void>;
}
