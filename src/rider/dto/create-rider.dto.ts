import { ApiProperty } from '@nestjs/swagger';

export class CreateRiderDto {
  @ApiProperty({ description: 'User information' })
  user: {
    name: string;
    email: string;
    password: string;  // Include password for user creation
    phoneNumber?: string;
    profilePictureUrl?: string;
  };

  @ApiProperty({ example: 'ABC123', description: 'The rider license number' })
  licenseNumber: string;

  @ApiProperty({ example: 'http://example.com/license.jpg', description: 'License image URL', required: false })
  licenseImageUrl?: string;
}
