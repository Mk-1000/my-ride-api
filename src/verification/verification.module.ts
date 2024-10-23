import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from 'src/image/image.module';
import { Verification } from '../entities/verification.entity';
import { RiderModule } from '../rider/rider.module'; // Import if needed
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Verification]), // Register Verification entity
    ImageModule,
    forwardRef(() => RiderModule), // Only include this if RiderModule is required
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
  exports: [VerificationService], // Export the service to make it accessible to other modules
})
export class VerificationModule {}
