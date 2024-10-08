import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomerService {
    private customerRepository;
    private userService;
    constructor(customerRepository: Repository<Customer>, userService: UserService);
    createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
}
