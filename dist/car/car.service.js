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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_entity_1 = require("../entities/car.entity");
const rider_service_1 = require("../rider/rider.service");
let CarService = class CarService {
    constructor(carRepository, riderService) {
        this.carRepository = carRepository;
        this.riderService = riderService;
    }
    async create(createCarDto) {
        const rider = await this.riderService.findOne(createCarDto.riderId);
        const car = this.carRepository.create({ ...createCarDto, rider });
        return this.carRepository.save(car);
    }
    async findAll() {
        return this.carRepository.find({ relations: ['rider'] });
    }
    async findOne(id) {
        const car = await this.carRepository.findOne({
            where: { id },
            relations: ['rider'],
        });
        if (!car) {
            throw new common_1.NotFoundException(`Car with ID ${id} not found`);
        }
        return car;
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        rider_service_1.RiderService])
], CarService);
//# sourceMappingURL=car.service.js.map