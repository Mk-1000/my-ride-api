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
const ride_entity_1 = require("../entities/ride.entity");
const create_ride_dto_1 = require("./dto/create-ride.dto");
const update_ride_dto_1 = require("./dto/update-ride.dto");
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
    async findOne(id) {
        return this.rideService.findOne(id);
    }
    async update(id, updateRideDto) {
        return this.rideService.update(id, updateRideDto);
    }
    async remove(id) {
        return this.rideService.remove(id);
    }
    async findByStatus(status) {
        return this.rideService.findByStatus(status);
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
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a ride by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a ride by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ride_dto_1.UpdateRideDto]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a ride by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    (0, swagger_1.ApiOperation)({ summary: 'Get rides by status' }),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "findByStatus", null);
exports.RideController = RideController = __decorate([
    (0, swagger_1.ApiTags)('rides'),
    (0, common_1.Controller)('rides'),
    __metadata("design:paramtypes", [ride_service_1.RideService])
], RideController);
//# sourceMappingURL=ride.controller.js.map