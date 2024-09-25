import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from '../customer/customer.module'; // Import CustomerModule
import { Customer } from '../entities/customer.entity';
import { Rider } from '../entities/rider.entity';
import { User } from '../entities/user.entity';
import { RiderModule } from '../rider/rider.module'; // Import RiderModule
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Customer, Rider]), // Register all entities
    forwardRef(() => RiderModule), // Avoid circular dependency
    forwardRef(() => CustomerModule),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule], // Export TypeOrmModule
})
export class UserModule {}
