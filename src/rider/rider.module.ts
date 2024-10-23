import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from '../entities/rider.entity';
import { UserModule } from '../user/user.module';
import { VerificationModule } from '../verification/verification.module';
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rider]),
    forwardRef(() => UserModule),
    forwardRef(() => VerificationModule), // Import VerificationModule
  ],
  controllers: [RiderController],
  providers: [RiderService],
  exports: [RiderService, TypeOrmModule],
})
export class RiderModule {}
