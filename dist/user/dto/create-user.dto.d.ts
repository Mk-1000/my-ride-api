import { CreateAddressDto } from 'src/address/dto/create-address.dto';
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    profilePictureUrl?: string;
    userType: string;
    address: CreateAddressDto;
}
