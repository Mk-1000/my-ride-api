import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../entities/customer.entity'; // Import Customer entity
import { Rider } from '../entities/rider.entity'; // Import Rider entity
import { User } from '../entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Customer, Rider]), // Add Rider here
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule.forFeature([User])], // Export UserService and UserRepository
})
export class UserModule {}
