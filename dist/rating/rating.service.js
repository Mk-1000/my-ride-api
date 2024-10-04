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
const ranting_entity_1 = require("../entities/ranting.entity");
const ride_service_1 = require("../ride/ride.service");
const user_service_1 = require("../user/user.service");
let RatingService = class RatingService {
    constructor(ratingRepository, userService, rideService) {
        this.ratingRepository = ratingRepository;
        this.userService = userService;
        this.rideService = rideService;
    }
    async create(createRatingDto) {
        const { rideId, raterId, rateeId, score, comment } = createRatingDto;
        const ride = await this.rideService.findOne(rideId);
        const rater = await this.userService.findOne(raterId);
        const ratee = await this.userService.findOne(rateeId);
        if (!ride || !rater || !ratee) {
            throw new common_1.NotFoundException('Ride or User not found');
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
    async findByRide(rideId) {
        return this.ratingRepository.find({
            where: { ride: { id: rideId } },
            relations: ['ride', 'rater', 'ratee'],
        });
    }
    async findByUser(userId) {
        return this.ratingRepository.find({
            where: [{ rater: { id: userId } }, { ratee: { id: userId } }],
            relations: ['ride', 'rater', 'ratee'],
        });
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ranting_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        ride_service_1.RideService])
], RatingService);
//# sourceMappingURL=rating.service.js.map