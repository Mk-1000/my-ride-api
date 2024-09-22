import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private userService: UserService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const user = await this.userService.create({
      ...createCustomerDto.user,
      userType: 'CUSTOMER' // Set userType to 'CUSTOMER' 
    }); // Create the user
    const customer = this.customerRepository.create({
      ...createCustomerDto,
      user,
    });
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find({ relations: ['user'] });
  }
}