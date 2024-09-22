import { ApiProperty } from '@nestjs/swagger';

export class CreateRiderDto {
  @ApiProperty({
    description: 'User information',
    example: {
      name: "Mokni Hamdi",
      email: "hamdi@gmail.com",
      password: "password123",
      phoneNumber: "50430778",
      profilePictureUrl: "https://www.facebook.com/photo/?fbid=128057343018499&set=a.117363367421230",
      userType: "RIDER"
    }
  })
  user: {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    profilePictureUrl?: string;
    userType: string;
  };

  @ApiProperty({ example: 'ABC123', description: 'The rider license number' })
  licenseNumber: string;

  @ApiProperty({ example: 'http://example.com/license.jpg', description: 'License image URL', required: false })
  licenseImageUrl?: string;
}