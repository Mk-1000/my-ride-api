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
}
