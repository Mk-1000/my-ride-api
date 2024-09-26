import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],  // Register the Address entity
  providers: [AddressService],  // Register the AddressService
  controllers: [AddressController],  // Register the AddressController
  exports: [AddressService],  // Export the AddressService for use in other modules
})
export class AddressModule {}
