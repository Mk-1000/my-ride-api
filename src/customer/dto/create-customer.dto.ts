import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'User information',
    example: {
      name: "Mokni Hamdi",
      email: "hamdi@gmail.com",
      password: "password123",
      phoneNumber: "50430778",
      profilePictureUrl: "https://www.facebook.com/photo/?fbid=128057343018499&set=a.117363367421230",
      userType: "CUSTOMER"
    }
  })
  user: {
    name: string;
    email: string;
    password: string;  // Include password for user creation
    phoneNumber?: string;
    profilePictureUrl?: string;
    userType: string; // Make sure to add userType here
  };

  @ApiProperty({ example: '123 Main St', description: 'The address of the customer', required: false })
  address?: string;

  @ApiProperty({ example: 100, description: 'Loyalty points of the customer', required: false })
  loyaltyPoints?: number;
}