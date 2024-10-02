import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { RideService } from 'src/ride/ride.service';
import { Repository } from 'typeorm';
import { Booking, BookingStatus } from '../entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private rideService: RideService,
    private customerService: CustomerService,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const { rideId, passengerId, seatCount, totalPrice } = createBookingDto;

    // Fetch ride and passenger using their respective services
    const ride = await this.rideService.findOne(rideId);
    const passenger = await this.customerService.findOne(passengerId);

    // Check if ride and passenger exist
    if (!ride || !passenger) {
        throw new Error('Ride or Passenger not found');
    }

    // Create a new booking using the ride and passenger
    const newBooking = this.bookingRepository.create({
        ride,
        passenger,
        seatCount,
        totalPrice,
        status: BookingStatus.PENDING, // Use enum directly
    });

    // Save the new booking in the database
    return this.bookingRepository.save(newBooking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find({ relations: ['ride', 'passenger'] });
  }
}
