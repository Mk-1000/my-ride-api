import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class CreateCustomerDto {
    user: CreateUserDto;
    address?: string;
    loyaltyPoints?: number;
}
