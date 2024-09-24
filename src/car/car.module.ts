import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entities/car.entity';
import { RiderModule } from '../rider/rider.module';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]),
    RiderModule, // Import RiderModule to access rider-related services
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
