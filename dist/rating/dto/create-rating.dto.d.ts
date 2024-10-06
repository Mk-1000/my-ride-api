import { RatingType } from 'src/entities/rating.entity';
export declare class CreateRatingDto {
    score: number;
    comments?: string;
    rideId: number;
    raterId: number;
    ratedId: number;
    type: RatingType;
}
