import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@Controller('ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get('ride/:rideId')
  findByRide(@Param('rideId') rideId: string) {
    return this.ratingService.findByRide(+rideId);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.ratingService.findByUser(+userId);
  }
}
