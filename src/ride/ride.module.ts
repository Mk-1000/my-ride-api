import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from 'src/booking/booking.module';
import { ImageModule } from 'src/image/image.module';
import { LocationModule } from 'src/location/location.module';
import { VerificationModule } from 'src/verification/verification.module';
import { CarService } from '../car/car.service';
import { Car } from '../entities/car.entity';
import { Ride } from '../entities/ride.entity';
import { Rider } from '../entities/rider.entity';
import { RiderService } from '../rider/rider.service';
import { UserModule } from '../user/user.module';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ride, Rider, Car]),
    forwardRef(() => BookingModule), // Using forwardRef to prevent circular dependency
    forwardRef(() => VerificationModule),
    forwardRef(() => UserModule),
    forwardRef(() => ImageModule),
    forwardRef(() => LocationModule),
    
    
  ],
  providers: [RideService, RiderService, CarService],
  controllers: [RideController],
  exports: [RideService],
})
export class RideModule {}
