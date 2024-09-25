import { Car } from './car.entity';
import { User } from './user.entity';
export declare class Rider extends User {
    licenseNumber: string;
    licenseImageUrl: string;
    cars: Car[];
}
