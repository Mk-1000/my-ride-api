"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rider_module_1 = require("../rider/rider.module");
const user_module_1 = require("../user/user.module");
const car_entity_1 = require("../entities/car.entity");
const car_controller_1 = require("./car.controller");
const car_service_1 = require("./car.service");
let CarModule = class CarModule {
};
exports.CarModule = CarModule;
exports.CarModule = CarModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([car_entity_1.Car]),
            user_module_1.UserModule, rider_module_1.RiderModule
        ],
        controllers: [car_controller_1.CarController],
        providers: [car_service_1.CarService],
        exports: [car_service_1.CarService],
    })
], CarModule);
//# sourceMappingURL=car.module.js.map