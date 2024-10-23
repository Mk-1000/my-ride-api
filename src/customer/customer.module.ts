import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModule } from 'src/booking/booking.module';
import { VerificationModule } from 'src/verification/verification.module';
import { Customer } from '../entities/customer.entity';
import { UserModule } from '../user/user.module'; // Import UserModule
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]), // Register Customer entity
    forwardRef(() => VerificationModule), // Import VerificationModule
    forwardRef(() => UserModule), // Avoid circular dependency
    forwardRef(() => BookingModule),

  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
