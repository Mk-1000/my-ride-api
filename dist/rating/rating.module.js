"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_module_1 = require("../customer/customer.module");
const rider_module_1 = require("../rider/rider.module");
const customer_entity_1 = require("../entities/customer.entity");
const rating_entity_1 = require("../entities/rating.entity");
const ride_entity_1 = require("../entities/ride.entity");
const rider_entity_1 = require("../entities/rider.entity");
const rating_controller_1 = require("./rating.controller");
const rating_service_1 = require("./rating.service");
let RatingModule = class RatingModule {
};
exports.RatingModule = RatingModule;
exports.RatingModule = RatingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([rating_entity_1.Rating, customer_entity_1.Customer, rider_entity_1.Rider, ride_entity_1.Ride]),
            (0, common_1.forwardRef)(() => customer_module_1.CustomerModule),
            (0, common_1.forwardRef)(() => rider_module_1.RiderModule),
        ],
        providers: [rating_service_1.RatingService],
        controllers: [rating_controller_1.RatingController],
    })
], RatingModule);
//# sourceMappingURL=rating.module.js.map