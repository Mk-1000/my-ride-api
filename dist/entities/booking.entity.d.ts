import { Customer } from './customer.entity';
import { Ride } from './ride.entity';
export declare enum BookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED"
}
export declare class Booking {
    id: number;
    ride: Ride;
    passenger: Customer;
    seatCount: number;
    totalPrice: number;
    status: BookingStatus;
}
