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
exports.UpdateRideDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const ride_entity_1 = require("../../entities/ride.entity");
const create_location_dto_1 = require("../../location/dto/create-location.dto");
class UpdateRideDto {
}
exports.UpdateRideDto = UpdateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start location of the ride', required: false }),
    __metadata("design:type", create_location_dto_1.CreateLocationDto)
], UpdateRideDto.prototype, "startLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End location of the ride', required: false }),
    __metadata("design:type", create_location_dto_1.CreateLocationDto)
], UpdateRideDto.prototype, "endLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-10-01',
        description: 'Date of the ride in YYYY-MM-DD format',
        required: false,
    }),
    __metadata("design:type", Date)
], UpdateRideDto.prototype, "rideDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '15:30:00',
        description: 'Time of the ride in HH:mm:ss format',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateRideDto.prototype, "rideTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Number of available seats', required: false }),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "availableSeats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25.5, description: 'Price per seat for the ride', required: false }),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "pricePerSeat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver ID (Rider)', required: false }),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "driverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Car ID', required: false }),
    __metadata("design:type", Number)
], UpdateRideDto.prototype, "carId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ride_entity_1.RideStatus, description: 'Status of the ride', required: false }),
    __metadata("design:type", String)
], UpdateRideDto.prototype, "status", void 0);
//# sourceMappingURL=update-ride.dto.js.map