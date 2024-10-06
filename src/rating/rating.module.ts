import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { RiderModule } from 'src/rider/rider.module';
import { Customer } from '../entities/customer.entity';
import { Rating } from '../entities/rating.entity';
import { Ride } from '../entities/ride.entity';
import { Rider } from '../entities/rider.entity';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rating, Customer, Rider, Ride]),
    forwardRef(() => CustomerModule),
    forwardRef(() => RiderModule),

  ],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
