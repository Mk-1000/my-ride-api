import { Rating } from './rating.entity';
import { User } from './user.entity';
export declare class Customer extends User {
    loyaltyPoints: number;
    ratings: Rating[];
}
