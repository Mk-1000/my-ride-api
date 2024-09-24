import { Car } from './car.entity';
import { Rider } from './rider.entity';
export declare class Ride {
    id: number;
    startLocation: string;
    endLocation: string;
    rideDate: Date;
    rideTime: string;
    availableSeats: number;
    pricePerSeat: number;
    driver: Rider;
    car: Car;
}
