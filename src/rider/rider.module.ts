import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from '../entities/rider.entity';
import { UserModule } from '../user/user.module'; // Import UserModule
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rider]),
    UserModule, // Ensure UserModule is imported
  ],
  controllers: [RiderController],
  providers: [RiderService],
  exports: [RiderService], // Export RiderService to be available in other modules
})
export class RiderModule {}
