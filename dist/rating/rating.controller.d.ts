import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(createRatingDto: CreateRatingDto): Promise<import("../entities/ranting.entity").Rating>;
    findByRide(rideId: string): Promise<import("../entities/ranting.entity").Rating[]>;
    findByUser(userId: string): Promise<import("../entities/ranting.entity").Rating[]>;
}
