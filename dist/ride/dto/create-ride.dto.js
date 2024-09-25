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
exports.CreateRideDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_location_dto_1 = require("../../location/dto/create-location.dto");
class CreateRideDto {
}
exports.CreateRideDto = CreateRideDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Start location of the ride' }),
    __metadata("design:type", create_location_dto_1.CreateLocationDto)
], CreateRideDto.prototype, "startLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'End location of the ride' }),
    __metadata("design:type", create_location_dto_1.CreateLocationDto)
], CreateRideDto.prototype, "endLocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-10-01', description: 'Date of the ride in YYYY-MM-DD format' }),
    __metadata("design:type", Date)
], CreateRideDto.prototype, "rideDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '15:30:00', description: 'Time of the ride in HH:mm:ss format' }),
    __metadata("design:type", String)
], CreateRideDto.prototype, "rideTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Number of available seats' }),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "availableSeats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25.5, description: 'Price per seat for the ride' }),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "pricePerSeat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Driver ID (Rider)' }),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "driverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Car ID' }),
    __metadata("design:type", Number)
], CreateRideDto.prototype, "carId", void 0);
//# sourceMappingURL=create-ride.dto.js.map