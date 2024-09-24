"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const car_service_1 = require("../car/car.service");
const car_entity_1 = require("../entities/car.entity");
const ride_entity_1 = require("../entities/ride.entity");
const rider_entity_1 = require("../entities/rider.entity");
const rider_service_1 = require("../rider/rider.service");
const user_module_1 = require("../user/user.module");
const ride_controller_1 = require("./ride.controller");
const ride_service_1 = require("./ride.service");
let RideModule = class RideModule {
};
exports.RideModule = RideModule;
exports.RideModule = RideModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ride_entity_1.Ride, rider_entity_1.Rider, car_entity_1.Car]),
            user_module_1.UserModule,
        ],
        providers: [ride_service_1.RideService, rider_service_1.RiderService, car_service_1.CarService],
        controllers: [ride_controller_1.RideController],
    })
], RideModule);
//# sourceMappingURL=ride.module.js.map