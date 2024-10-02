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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_service_1 = require("../customer/customer.service");
const ride_service_1 = require("../ride/ride.service");
const typeorm_2 = require("typeorm");
const booking_entity_1 = require("../entities/booking.entity");
let BookingService = class BookingService {
    constructor(bookingRepository, rideService, customerService) {
        this.bookingRepository = bookingRepository;
        this.rideService = rideService;
        this.customerService = customerService;
    }
    async create(createBookingDto) {
        const { rideId, passengerId, seatCount, totalPrice } = createBookingDto;
        const ride = await this.rideService.findOne(rideId);
        const passenger = await this.customerService.findOne(passengerId);
        if (!ride || !passenger) {
            throw new Error('Ride or Passenger not found');
        }
        const newBooking = this.bookingRepository.create({
            ride,
            passenger,
            seatCount,
            totalPrice,
            status: booking_entity_1.BookingStatus.PENDING,
        });
        return this.bookingRepository.save(newBooking);
    }
    async findAll() {
        return this.bookingRepository.find({ relations: ['ride', 'passenger'] });
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ride_service_1.RideService,
        customer_service_1.CustomerService])
], BookingService);
//# sourceMappingURL=booking.service.js.map