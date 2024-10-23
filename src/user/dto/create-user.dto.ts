import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { UserType } from 'src/entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'Mokni Hamdi', description: 'The name of the user' })
  name: string;

  @ApiProperty({ example: 'hamdi@gmail.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password for the user account' })
  password: string; 

  @ApiProperty({ example: '50430778', description: 'The user\'s phone number', required: false })
  phoneNumber?: string;

  @ApiProperty({ example: 'https://www.facebook.com/photo/?fbid=128057343018499&set=a.117363367421230', description: 'Profile picture URL', required: false })
  profilePictureUrl?: string;

  // Add userType to the DTO
  @ApiProperty({ example: 'CUSTOMER', description: 'The type of user', required: true })
  userType: UserType;
  
  // Address property in the DTO
  @ApiProperty({ type: CreateAddressDto, description: 'The address of the user', required: true })
  address: CreateAddressDto;
}