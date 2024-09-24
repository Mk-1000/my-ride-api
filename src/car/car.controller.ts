import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Car } from '../entities/car.entity';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@ApiTags('cars')  // Grouping in Swagger UI
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new car for a rider' })
  async create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }
}
