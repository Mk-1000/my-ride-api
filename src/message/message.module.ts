import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../entities/message.entity';
import { UserModule } from '../user/user.module';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
imports: [
    TypeOrmModule.forFeature([Message]), // Register all entities
    forwardRef(() => UserModule),
  ],
  providers: [MessageService],
  controllers: [MessageController],
  exports: [MessageService],
})
export class MessageModule {}
