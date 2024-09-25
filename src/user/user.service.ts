import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10; // Number of rounds for hashing
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
    
    // Create a new user object without the plaintext password
    const newUser = this.userRepository.create({
      ...createUserDto,
      encryptedPassword: hashedPassword, // Use hashed password instead
    });

    return this.userRepository.save(newUser);
  }

  async login(loginUserDto: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    const isMatch = await bcrypt.compare(loginUserDto.password, user.encryptedPassword);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    return user; // Return user or some token if needed
  }
  

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}