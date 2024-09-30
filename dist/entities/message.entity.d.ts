import { User } from './user.entity';
export declare enum MessageStatus {
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    READ = "READ"
}
export declare class Message {
    id: number;
    sender: User;
    receiver: User;
    content: string;
    timestamp: Date;
    status: MessageStatus;
}
