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
exports.CreateCarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateCarDto {
}
exports.CreateCarDto = CreateCarDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Toyota', description: 'Car make' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "make", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Corolla', description: 'Car model' }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2020, description: 'Car year' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Black', description: 'Car color', required: false }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABC-1234', description: 'License plate', required: false }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "licensePlate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Rider ID' }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "riderId", void 0);
//# sourceMappingURL=create-car.dto.js.map