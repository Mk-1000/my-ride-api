import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { RideModule } from 'src/ride/ride.module'; // Ensure this uses forwardRef if necessary
import { Booking } from '../entities/booking.entity';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking]),
    forwardRef(() => CustomerModule),
    forwardRef(() => RideModule), // Use forwardRef if there's a dependency on RideService
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
