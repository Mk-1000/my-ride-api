"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const address_entity_1 = require("../entities/address.entity");
const customer_module_1 = require("../customer/customer.module");
const customer_entity_1 = require("../entities/customer.entity");
const rider_entity_1 = require("../entities/rider.entity");
const user_entity_1 = require("../entities/user.entity");
const rider_module_1 = require("../rider/rider.module");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, customer_entity_1.Customer, rider_entity_1.Rider, address_entity_1.Address]),
            (0, common_1.forwardRef)(() => rider_module_1.RiderModule),
            (0, common_1.forwardRef)(() => customer_module_1.CustomerModule),
        ],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService, typeorm_1.TypeOrmModule],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map