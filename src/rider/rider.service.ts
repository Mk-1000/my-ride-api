import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private userService: UserService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const user = await this.userService.create(createCustomerDto.user); // Create the user
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
