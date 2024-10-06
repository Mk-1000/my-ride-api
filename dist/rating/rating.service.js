"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("../entities/customer.entity");
const rating_entity_1 = require("../entities/rating.entity");
const ride_entity_1 = require("../entities/ride.entity");
const rider_entity_1 = require("../entities/rider.entity");
let RatingService = class RatingService {
    constructor(ratingRepository, customerRepository, riderRepository, rideRepository) {
        this.ratingRepository = ratingRepository;
        this.customerRepository = customerRepository;
        this.riderRepository = riderRepository;
        this.rideRepository = rideRepository;
    }
    async create(createRatingDto) {
        const { score, comments, rideId, raterId, ratedId, type } = createRatingDto;
        const ride = await this.rideRepository.findOne({ where: { id: rideId } });
        if (!ride) {
            throw new common_1.NotFoundException(`Ride with ID ${rideId} not found`);
        }
        let existingRating = null;
        if (createRatingDto.type == rating_entity_1.RatingType.CustomerToRider) {
            existingRating = await this.ratingRepository.findOne({
                where: {
                    ride: { id: rideId },
                    type: rating_entity_1.RatingType.CustomerToRider,
                    customer: { id: raterId }, rider: { id: ratedId },
                },
            });
        }
        else {
            if (createRatingDto.type == rating_entity_1.RatingType.RiderToCustomer) {
                existingRating = await this.ratingRepository.findOne({
                    where: {
                        ride: { id: rideId },
                        type: rating_entity_1.RatingType.RiderToCustomer,
                        rider: { id: raterId }, customer: { id: ratedId },
                    },
                });
            }
        }
        if (existingRating) {
            throw new common_1.NotFoundException(`Rating for this ride by this rater already exists in direction ${type}`);
        }
        const rating = new rating_entity_1.Rating();
        rating.score = score;
        rating.comments = comments;
        rating.ride = ride;
        rating.type = type;
        if (type === rating_entity_1.RatingType.CustomerToRider) {
            const customer = await this.customerRepository.findOne({ where: { id: raterId } });
            const rider = await this.riderRepository.findOne({ where: { id: ratedId } });
            if (!customer || !rider) {
                throw new common_1.NotFoundException(`Customer or Rider not found`);
            }
            rating.customer = customer;
            rating.rider = rider;
        }
        else if (type === rating_entity_1.RatingType.RiderToCustomer) {
            const rider = await this.riderRepository.findOne({ where: { id: raterId } });
            const customer = await this.customerRepository.findOne({ where: { id: ratedId } });
            if (!rider || !customer) {
                throw new common_1.NotFoundException(`Rider or Customer not found`);
            }
            rating.rider = rider;
            rating.customer = customer;
        }
        return this.ratingRepository.save(rating);
    }
    async findAll(page = 1, limit = 10) {
        return this.ratingRepository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __param(1, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __param(2, (0, typeorm_1.InjectRepository)(rider_entity_1.Rider)),
    __param(3, (0, typeorm_1.InjectRepository)(ride_entity_1.Ride)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RatingService);
//# sourceMappingURL=rating.service.js.map