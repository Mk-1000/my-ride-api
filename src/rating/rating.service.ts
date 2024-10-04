import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from '../entities/ranting.entity';
import { RideService } from '../ride/ride.service';
import { UserService } from '../user/user.service';
import { CreateRatingDto } from './dto/create-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepository: Repository<Rating>,
    private readonly userService: UserService,
    private readonly rideService: RideService,
  ) {}

  async create(createRatingDto: CreateRatingDto): Promise<Rating> {
    const { rideId, raterId, rateeId, score, comment } = createRatingDto;
    const ride = await this.rideService.findOne(rideId);
    const rater = await this.userService.findOne(raterId);
    const ratee = await this.userService.findOne(rateeId);

    if (!ride || !rater || !ratee) {
      throw new NotFoundException('Ride or User not found');
    }

    const rating = this.ratingRepository.create({
      ride,
      rater,
      ratee,
      score,
      comment,
    });

    return this.ratingRepository.save(rating);
  }

  async findByRide(rideId: number): Promise<Rating[]> {
    return this.ratingRepository.find({
      where: { ride: { id: rideId } },
      relations: ['ride', 'rater', 'ratee'],
    });
  }

  async findByUser(userId: number): Promise<Rating[]> {
    return this.ratingRepository.find({
      where: [{ rater: { id: userId } }, { ratee: { id: userId } }],
      relations: ['ride', 'rater', 'ratee'],
    });
  }
}
