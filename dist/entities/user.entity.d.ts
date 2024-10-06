import { Address } from './address.entity';
import { Message } from './message.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    encryptedPassword: string;
    hashPassword(): Promise<void>;
    phoneNumber: string;
    profilePictureUrl: string;
    userType: string;
    address: Address;
    sentMessages: Message[];
    receivedMessages: Message[];
}
