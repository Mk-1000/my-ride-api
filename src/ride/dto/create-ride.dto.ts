import { ApiProperty } from '@nestjs/swagger';

export class CreateRideDto {
  @ApiProperty({ example: 'New York', description: 'Start location of the ride' })
  startLocation: string;

  @ApiProperty({ example: 'Los Angeles', description: 'End location of the ride' })
  endLocation: string;

  @ApiProperty({ example: '2024-10-01', description: 'Date of the ride in YYYY-MM-DD format' })
  rideDate: Date;

  @ApiProperty({ example: '15:30:00', description: 'Time of the ride in HH:mm:ss format' })
  rideTime: string;

  @ApiProperty({ example: 4, description: 'Number of available seats' })
  availableSeats: number;

  @ApiProperty({ example: 25.5, description: 'Price per seat for the ride' })
  pricePerSeat: number;

  @ApiProperty({ example: 1, description: 'Driver ID (Rider)' })
  driverId: number;

  @ApiProperty({ example: 2, description: 'Car ID' })
  carId: number;
}
