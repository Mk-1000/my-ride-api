import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({ description: 'User information' })
  user: {
    name: string;
    email: string;
    password: string;  // Include password for user creation
    phoneNumber?: string;
    profilePictureUrl?: string;
  };

  @ApiProperty({ example: '123 Main St', description: 'The address of the customer', required: false })
  address?: string;

  @ApiProperty({ example: 100, description: 'Loyalty points of the customer', required: false })
  loyaltyPoints?: number;
}
