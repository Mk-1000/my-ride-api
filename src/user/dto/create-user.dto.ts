import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Mokni Hamdi', description: 'The name of the user' })
  name: string;

  @ApiProperty({ example: 'hamdi@gmail.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password for the user account' })
  password: string; // This should be 'password'

  @ApiProperty({ example: '50430778', description: 'The user\'s phone number', required: false })
  phoneNumber?: string;

  @ApiProperty({ example: 'https://www.facebook.com/photo/?fbid=128057343018499&set=a.117363367421230', description: 'Profile picture URL', required: false })
  profilePictureUrl?: string;
}
