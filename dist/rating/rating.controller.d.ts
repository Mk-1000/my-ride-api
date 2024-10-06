import { Rating } from '../entities/rating.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    create(createRatingDto: CreateRatingDto): Promise<Rating>;
    findAll(page?: number, limit?: number): Promise<Rating[]>;
}
