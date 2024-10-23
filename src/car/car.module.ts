import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from 'src/image/image.module';
import { RiderModule } from 'src/rider/rider.module';
import { UserModule } from 'src/user/user.module';
import { Car } from '../entities/car.entity';
import { CarController } from './car.controller';
import { CarService } from './car.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Car]), // Register the Car entity for TypeORM
    forwardRef(() => ImageModule), // Use forwardRef for circular dependency
    UserModule,
    RiderModule // Import RiderModule to access rider-related services
  ],
  controllers: [CarController], // Register the CarController
  providers: [CarService], // Register the CarService
  exports: [CarService], // Export CarService for use in other modules
})
export class CarModule {}
