import { Message } from '../entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    createMessage(createMessageDto: CreateMessageDto): Promise<Message>;
    getUserMessages(userId: number): Promise<Message[]>;
    markMessageAsReceived(id: number): Promise<Message>;
    markMessageAsRead(id: number): Promise<Message>;
}
