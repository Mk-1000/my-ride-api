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
const ranting_entity_1 = require("../entities/ranting.entity");
const ride_module_1 = require("../ride/ride.module");
const user_module_1 = require("../user/user.module");
const rating_controller_1 = require("./rating.controller");
const rating_service_1 = require("./rating.service");
let RatingModule = class RatingModule {
};
exports.RatingModule = RatingModule;
exports.RatingModule = RatingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ranting_entity_1.Rating]),
            (0, common_1.forwardRef)(() => ride_module_1.RideModule),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        providers: [rating_service_1.RatingService],
        controllers: [rating_controller_1.RatingController],
        exports: [rating_service_1.RatingService],
    })
], RatingModule);
//# sourceMappingURL=rating.module.js.map