import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from '../entities/rider.entity';
import { UserModule } from '../user/user.module'; // Import UserModule
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service.spec';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rider]),
    UserModule, // Make sure UserModule is imported
  ],
  controllers: [RiderController],
  providers: [RiderService],
})
export class RiderModule {}
