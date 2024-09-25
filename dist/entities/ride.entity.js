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
exports.Ride = void 0;
const typeorm_1 = require("typeorm");
const car_entity_1 = require("./car.entity");
const location_entity_1 = require("./location.entity");
const rider_entity_1 = require("./rider.entity");
let Ride = class Ride {
};
exports.Ride = Ride;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Ride.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.Location, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'start_location_id' }),
    __metadata("design:type", location_entity_1.Location)
], Ride.prototype, "startLocation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.Location, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'end_location_id' }),
    __metadata("design:type", location_entity_1.Location)
], Ride.prototype, "endLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Ride.prototype, "rideDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Ride.prototype, "rideTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Ride.prototype, "availableSeats", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Ride.prototype, "pricePerSeat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rider_entity_1.Rider),
    (0, typeorm_1.JoinColumn)({ name: 'driver_id' }),
    __metadata("design:type", rider_entity_1.Rider)
], Ride.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => car_entity_1.Car),
    (0, typeorm_1.JoinColumn)({ name: 'car_id' }),
    __metadata("design:type", car_entity_1.Car)
], Ride.prototype, "car", void 0);
exports.Ride = Ride = __decorate([
    (0, typeorm_1.Entity)()
], Ride);
//# sourceMappingURL=ride.entity.js.map