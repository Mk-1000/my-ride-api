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
exports.RideService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const booking_service_1 = require("../booking/booking.service");
const typeorm_2 = require("typeorm");
const car_service_1 = require("../car/car.service");
const ride_entity_1 = require("../entities/ride.entity");
const location_service_1 = require("../location/location.service");
const rider_service_1 = require("../rider/rider.service");
let RideService = class RideService {
    constructor(rideRepository, locationService, riderService, carService, bookingService) {
        this.rideRepository = rideRepository;
        this.locationService = locationService;
        this.riderService = riderService;
        this.carService = carService;
        this.bookingService = bookingService;
    }
    async create(createRideDto) {
        const driver = await this.riderService.findOne(createRideDto.driverId);
        const car = await this.carService.findOne(createRideDto.carId);
        const startLocation = await this.locationService.create(createRideDto.startLocation);
        const endLocation = await this.locationService.create(createRideDto.endLocation);
        const ride = this.rideRepository.create({
            ...createRideDto,
            driver,
            car,
            startLocation,
            endLocation,
            status: ride_entity_1.RideStatus.ACTIVE,
        });
        return this.rideRepository.save(ride);
    }
    async findAll() {
        return this.rideRepository.find({ relations: ['driver', 'car', 'startLocation', 'endLocation'] });
    }
    async findOne(id) {
        const ride = await this.rideRepository.findOne({
            where: { id },
            relations: ['driver', 'car', 'startLocation', 'endLocation'],
        });
        if (!ride) {
            throw new common_1.NotFoundException(`Ride with ID ${id} not found`);
        }
        return ride;
    }
    async update(id, updateRideDto) {
        const ride = await this.findOne(id);
        Object.assign(ride, updateRideDto);
        return this.rideRepository.save(ride);
    }
    async remove(id) {
        try {
            await this.bookingService.removeByRideId(id);
            const result = await this.rideRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Ride with ID ${id} not found`);
            }
        }
        catch (error) {
            console.error('Error deleting ride:', error);
            throw new common_1.InternalServerErrorException('Error deleting ride');
        }
    }
    async findByStatus(status) {
        return this.rideRepository.find({
            where: { status },
            relations: ['driver', 'car', 'startLocation', 'endLocation'],
        });
    }
};
exports.RideService = RideService;
exports.RideService = RideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ride_entity_1.Ride)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        location_service_1.LocationService,
        rider_service_1.RiderService,
        car_service_1.CarService,
        booking_service_1.BookingService])
], RideService);
//# sourceMappingURL=ride.service.js.map