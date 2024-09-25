import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class CreateRiderDto {
    user: CreateUserDto;
    licenseNumber: string;
    licenseImageUrl?: string;
}
