import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateRiderDto {
  @ApiProperty({ description: 'User information' })
  user: CreateUserDto;

  @ApiProperty({ example: 'ABC123', description: 'The rider license number' })
  licenseNumber: string;

  @ApiProperty({ example: 'http://example.com/license.jpg', description: 'License image URL', required: false })
  licenseImageUrl?: string;
}
