import { Car } from './car.entity';
import { Rating } from './rating.entity';
import { User } from './user.entity';
export declare class Rider extends User {
    licenseNumber: string;
    licenseImageUrl: string;
    cars: Car[];
    ratings: Rating[];
}
