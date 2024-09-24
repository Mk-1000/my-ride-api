import { Car } from './car.entity';
import { User } from './user.entity';
export declare class Rider {
    id: number;
    licenseNumber: string;
    licenseImageUrl: string;
    user: User;
    cars: Car[];
}
