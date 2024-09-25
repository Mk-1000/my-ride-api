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
exports.RiderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const rider_entity_1 = require("../entities/rider.entity");
let RiderService = class RiderService {
    constructor(riderRepository) {
        this.riderRepository = riderRepository;
    }
    async createRider(createRiderDto) {
        try {
            const hashedPassword = await bcrypt.hash(createRiderDto.user.password, 10);
            const newRider = this.riderRepository.create({
                ...createRiderDto.user,
                encryptedPassword: hashedPassword,
                userType: 'RIDER',
                licenseNumber: createRiderDto.licenseNumber,
                licenseImageUrl: createRiderDto.licenseImageUrl,
            });
            return await this.riderRepository.save(newRider);
        }
        catch (error) {
            console.error('Error creating rider:', error);
            throw new common_1.InternalServerErrorException('Failed to create rider');
        }
    }
    async findAll() {
        return this.riderRepository.find();
    }
    async findOne(id) {
        const rider = await this.riderRepository.findOne({ where: { id } });
        if (!rider) {
            throw new common_1.NotFoundException(`Rider with ID ${id} not found`);
        }
        return rider;
    }
};
exports.RiderService = RiderService;
exports.RiderService = RiderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rider_entity_1.Rider)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RiderService);
//# sourceMappingURL=rider.service.js.map