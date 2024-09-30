import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { UserService } from '../user/user.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessageService {
    private readonly messageRepository;
    private readonly userService;
    constructor(messageRepository: Repository<Message>, userService: UserService);
    createMessage(createMessageDto: CreateMessageDto): Promise<Message>;
    getMessagesByUser(userId: number): Promise<Message[]>;
    markAsReceived(messageId: number): Promise<Message>;
    markAsRead(messageId: number): Promise<Message>;
}
