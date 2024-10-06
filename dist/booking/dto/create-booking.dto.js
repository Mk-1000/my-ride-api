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
exports.CreateBookingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBookingDto {
}
exports.CreateBookingDto = CreateBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Ride ID' }),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "rideId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Customer ID' }),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "passengerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, description: 'Number of seats booked' }),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "seatCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50.0, description: 'Total price for the booking' }),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "totalPrice", void 0);
//# sourceMappingURL=create-booking.dto.js.map