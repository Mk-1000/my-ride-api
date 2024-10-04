import { Ride } from './ride.entity';
import { User } from './user.entity';
export declare class Rating {
    id: number;
    ride: Ride;
    rater: User;
    ratee: User;
    score: number;
    comment: string;
    ratingDate: Date;
}
