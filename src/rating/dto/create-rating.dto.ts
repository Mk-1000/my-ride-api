import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty({ description: 'Start location of the ride' })

  rideId: number;
  @ApiProperty({ description: 'Start location of the ride' })

  raterId: number;
  @ApiProperty({ description: 'Start location of the ride' })

  rateeId: number;
  @ApiProperty({ description: 'Start location of the ride' })

  score: number;
  @ApiProperty({ description: 'Start location of the ride' })

  comment: string;
}
