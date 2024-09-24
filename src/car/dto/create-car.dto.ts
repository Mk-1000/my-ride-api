import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({ example: 'Toyota', description: 'Car make' })
  make: string;

  @ApiProperty({ example: 'Corolla', description: 'Car model' })
  model: string;

  @ApiProperty({ example: 2020, description: 'Car year' })
  year: number;

  @ApiProperty({ example: 'Black', description: 'Car color', required: false })
  color?: string;

  @ApiProperty({ example: 'ABC-1234', description: 'License plate', required: false })
  licensePlate?: string;
}
