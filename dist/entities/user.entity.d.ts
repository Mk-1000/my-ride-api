import { Customer } from './customer.entity';
import { Rider } from './rider.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    encryptedPassword: string;
    phoneNumber: string;
    profilePictureUrl: string;
    userType: string;
    rider: Rider;
    customer: Customer;
}
