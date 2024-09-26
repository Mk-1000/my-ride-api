import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UserService } from '../user/user.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private userService: UserService, // Inject UserService for any common user logic
  ) {}

  // Create a new customer
  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    try {
      const hashedPassword = await bcrypt.hash(createCustomerDto.user.password, 10);
  
      const newCustomer = this.customerRepository.create({
        ...createCustomerDto.user,
        encryptedPassword: hashedPassword,
        loyaltyPoints: createCustomerDto.loyaltyPoints,
        userType: 'CUSTOMER',
      });
  
      return await this.customerRepository.save(newCustomer);
    } catch (error) {
      console.error('Error creating customer:', error);
      throw new InternalServerErrorException('Failed to create customer');
    }
  }
  

  // Retrieve all customers
  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find(); // No need for 'user' relation as Customer extends User
  }
}
