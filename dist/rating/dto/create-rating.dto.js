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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRatingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const rating_entity_1 = require("../../entities/rating.entity");
class CreateRatingDto {
}
exports.CreateRatingDto = CreateRatingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Rating score (0-5)' }),
    (0, class_validator_1.IsInt)({ message: 'Score must be an integer' }),
    (0, class_validator_1.Min)(0, { message: 'Score must be at least 0' }),
    (0, class_validator_1.Max)(5, { message: 'Score must not exceed 5' }),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "score", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Great ride!', description: 'Optional comments', required: false }),
    __metadata("design:type", String)
], CreateRatingDto.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Ride ID' }),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "rideId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Rater ID (customer or rider)' }),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "raterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'Rated ID (rider or customer)' }),
    __metadata("design:type", Number)
], CreateRatingDto.prototype, "ratedId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: rating_entity_1.RatingType,
        description: 'Rating type (CustomerToRider or RiderToCustomer)',
    }),
    __metadata("design:type", String)
], CreateRatingDto.prototype, "type", void 0);
//# sourceMappingURL=create-rating.dto.js.map