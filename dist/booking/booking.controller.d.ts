import { Booking } from '../entities/booking.entity';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    findByRideId(rideId: number): Promise<Booking[]>;
    accept(id: number): Promise<Booking>;
    refuse(id: number): Promise<Booking>;
    delete(id: number): Promise<void>;
}
