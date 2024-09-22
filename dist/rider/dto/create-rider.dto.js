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
exports.CreateRiderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRiderDto {
}
exports.CreateRiderDto = CreateRiderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User information' }),
    __metadata("design:type", Object)
], CreateRiderDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ABC123', description: 'The rider license number' }),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "licenseNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://example.com/license.jpg', description: 'License image URL', required: false }),
    __metadata("design:type", String)
], CreateRiderDto.prototype, "licenseImageUrl", void 0);
//# sourceMappingURL=create-rider.dto.js.map