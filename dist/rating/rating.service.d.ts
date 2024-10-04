import { Repository } from 'typeorm';
import { Rating } from '../entities/ranting.entity';
import { RideService } from '../ride/ride.service';
import { UserService } from '../user/user.service';
import { CreateRatingDto } from './dto/create-rating.dto';
export declare class RatingService {
    private ratingRepository;
    private readonly userService;
    private readonly rideService;
    constructor(ratingRepository: Repository<Rating>, userService: UserService, rideService: RideService);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findByRide(rideId: number): Promise<Rating[]>;
    findByUser(userId: number): Promise<Rating[]>;
}
