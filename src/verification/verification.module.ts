import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verification } from '../entities/verification.entity';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Verification]),
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
  exports: [VerificationService],
})
export class VerificationModule {}
