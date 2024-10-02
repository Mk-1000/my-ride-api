import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { RideModule } from 'src/ride/ride.module'; // Import RideModule
import { Booking } from '../entities/booking.entity';
import { Customer } from '../entities/customer.entity';
import { Ride } from '../entities/ride.entity';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Ride, Customer]),
    
    forwardRef(() => CustomerModule),
    forwardRef(() => RideModule),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
