import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Rating } from 'src/entities/rating.entity';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: ['address', 'sentMessages', 'receivedMessages', 'images', 'cinVerification', 'licenseVerification'],
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
    
    // Create a new user object with hashed password
    const newUser = this.userRepository.create({
      ...createUserDto,
      encryptedPassword: hashedPassword, // store the hashed password
      address: createUserDto.address,
    });
  
    return this.userRepository.save(newUser);
  }
  

  async login(loginUserDto: LoginUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    console.log('User found:', user);
    console.log('Input password:', loginUserDto.password);
    console.log('Stored hashed password:', user.encryptedPassword);
  
    const isMatch = await bcrypt.compare(loginUserDto.password, user.encryptedPassword);
    if (!isMatch) {
      console.log('Password does not match');
      throw new UnauthorizedException('Invalid credentials');
    }
  
    console.log('Password matched');
    return user;
  }
  
  async remove(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Delete all ratings related to this user
    await this.ratingRepository.delete({ rider: { id }, customer: { id } });

    // Proceed to delete the user
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }
  
}