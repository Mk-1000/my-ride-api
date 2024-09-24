import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../entities/car.entity';
import { RiderModule } from '../rider/rider.module';
import { CarController } from './car.controller';
import { CarService } from './car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car]), // Register the Car entity for TypeORM
    RiderModule, // Import RiderModule to access rider-related services
  ],
  controllers: [CarController], // Register the CarController
  providers: [CarService], // Register the CarService
  exports: [CarService], // Export CarService for use in other modules
})
export class CarModule {}
