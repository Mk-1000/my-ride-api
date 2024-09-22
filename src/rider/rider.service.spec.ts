import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rider } from '../entities/rider.entity';
import { UserService } from '../user/user.service';
import { CreateRiderDto } from './dto/create-rider.dto';

@Injectable()
export class RiderService {
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
    private userService: UserService,
  ) {}

  async create(createRiderDto: CreateRiderDto): Promise<Rider> {
    const user = await this.userService.create(createRiderDto.user); // Create the user
    const rider = this.riderRepository.create({
      ...createRiderDto,
      user,
    });
    return this.riderRepository.save(rider);
  }

  async findAll(): Promise<Rider[]> {
    return this.riderRepository.find({ relations: ['user'] });
  }
}
