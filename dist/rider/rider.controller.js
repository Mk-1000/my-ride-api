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
exports.RiderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_rider_dto_1 = require("./dto/create-rider.dto");
const rider_service_1 = require("./rider.service");
let RiderController = class RiderController {
    constructor(riderService) {
        this.riderService = riderService;
    }
    async create(createRiderDto) {
        return this.riderService.createRider(createRiderDto);
    }
    async findAll() {
        return this.riderService.findAll();
    }
};
exports.RiderController = RiderController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new rider' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rider_dto_1.CreateRiderDto]),
    __metadata("design:returntype", Promise)
], RiderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all riders' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RiderController.prototype, "findAll", null);
exports.RiderController = RiderController = __decorate([
    (0, swagger_1.ApiTags)('riders'),
    (0, common_1.Controller)('riders'),
    __metadata("design:paramtypes", [rider_service_1.RiderService])
], RiderController);
//# sourceMappingURL=rider.controller.js.map