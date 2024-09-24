import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Ride } from '../entities/ride.entity';
import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';

@ApiTags('rides')  // Grouping in Swagger UI
@Controller('rides')
export class RideController {
  constructor(private readonly rideService: RideService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ride' })
  async create(@Body() createRideDto: CreateRideDto): Promise<Ride> {
    return this.rideService.create(createRideDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rides' })
  async findAll(): Promise<Ride[]> {
    return this.rideService.findAll();
  }
}
