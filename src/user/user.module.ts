import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';
import { Address } from 'src/entities/address.entity';
import { MessageModule } from 'src/message/message.module';
import { RatingModule } from 'src/rating/rating.module';
import { CustomerModule } from '../customer/customer.module'; // Import CustomerModule
import { Customer } from '../entities/customer.entity';
import { Rider } from '../entities/rider.entity';
import { User } from '../entities/user.entity';
import { RiderModule } from '../rider/rider.module'; // Import RiderModule
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Customer, Rider,Address]),
    RatingModule,
    forwardRef(() => RiderModule),
    forwardRef(() => CustomerModule),
    forwardRef(() => MessageModule),
    forwardRef(() => AddressModule),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule], // Export TypeOrmModule
})
export class UserModule {}
