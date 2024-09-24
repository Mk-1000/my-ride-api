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
exports.RideController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_ride_dto_1 = require("./dto/create-ride.dto");
const ride_service_1 = require("./ride.service");
let RideController = class RideController {
    constructor(rideService) {
        this.rideService = rideService;
    }
    async create(createRideDto) {
        return this.rideService.create(createRideDto);
    }
    async findAll() {
        return this.rideService.findAll();
    }
};
exports.RideController = RideController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new ride' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ride_dto_1.CreateRideDto]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all rides' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RideController.prototype, "findAll", null);
exports.RideController = RideController = __decorate([
    (0, swagger_1.ApiTags)('rides'),
    (0, common_1.Controller)('rides'),
    __metadata("design:paramtypes", [ride_service_1.RideService])
], RideController);
//# sourceMappingURL=ride.controller.js.map