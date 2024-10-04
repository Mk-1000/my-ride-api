import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from '../entities/rider.entity';
import { UserModule } from '../user/user.module'; // Import UserModule
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rider]), // Register Rider entity
    forwardRef(() => UserModule), // Avoid circular dependency
  ],
  controllers: [RiderController],
  providers: [RiderService],
  exports: [RiderService],
})
export class RiderModule {}
