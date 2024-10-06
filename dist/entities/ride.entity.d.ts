import { Car } from './car.entity';
import { Location } from './location.entity';
import { Rating } from './rating.entity';
import { Rider } from './rider.entity';
export declare enum RideStatus {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare class Ride {
    id: number;
    startLocation: Location;
    endLocation: Location;
    rideDate: Date;
    rideTime: string;
    availableSeats: number;
    pricePerSeat: number;
    driver: Rider;
    car: Car;
    status: RideStatus;
    ratings: Rating[];
}
