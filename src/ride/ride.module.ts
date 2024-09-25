import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from 'src/location/location.module';
import { CarService } from '../car/car.service';
import { Car } from '../entities/car.entity';
import { Ride } from '../entities/ride.entity';
import { Rider } from '../entities/rider.entity';
import { RiderService } from '../rider/rider.service';
import { UserModule } from '../user/user.module'; // Import UserModule
import { RideController } from './ride.controller';
import { RideService } from './ride.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ride, Rider, Car]),  // Register Ride, Rider, and Car repositories
    UserModule, LocationModule// Include UserModule to make UserService available
  ],
  providers: [RideService, RiderService, CarService],
  controllers: [RideController],
})
export class RideModule {}
