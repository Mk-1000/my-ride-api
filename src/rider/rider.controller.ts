import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Rider } from '../entities/rider.entity';
import { CreateRiderDto } from './dto/create-rider.dto';
import { RiderService } from './rider.service';

@ApiTags('riders')  // Grouping in Swagger UI
@Controller('riders')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new rider' })
  async create(@Body() createRiderDto: CreateRiderDto): Promise<Rider> {
    return this.riderService.createRider(createRiderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all riders' })
  async findAll(): Promise<Rider[]> {
    return this.riderService.findAll();
  }
}