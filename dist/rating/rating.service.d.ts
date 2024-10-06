import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { Rating } from '../entities/rating.entity';
import { Ride } from '../entities/ride.entity';
import { Rider } from '../entities/rider.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingService {
    private readonly ratingRepository;
    private readonly customerRepository;
    private readonly riderRepository;
    private readonly rideRepository;
    constructor(ratingRepository: Repository<Rating>, customerRepository: Repository<Customer>, riderRepository: Repository<Rider>, rideRepository: Repository<Ride>);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(page?: number, limit?: number): Promise<Rating[]>;
}
