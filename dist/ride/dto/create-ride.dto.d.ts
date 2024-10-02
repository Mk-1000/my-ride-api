import { RideStatus } from 'src/entities/ride.entity';
import { CreateLocationDto } from 'src/location/dto/create-location.dto';
export declare class CreateRideDto {
    startLocation: CreateLocationDto;
    endLocation: CreateLocationDto;
    rideDate: Date;
    rideTime: string;
    availableSeats: number;
    pricePerSeat: number;
    driverId: number;
    carId: number;
    status: RideStatus;
}
