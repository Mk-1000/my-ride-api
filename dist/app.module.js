"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const address_module_1 = require("./address/address.module");
const booking_module_1 = require("./booking/booking.module");
const car_module_1 = require("./car/car.module");
const customer_module_1 = require("./customer/customer.module");
const location_module_1 = require("./location/location.module");
const message_module_1 = require("./message/message.module");
const rating_module_1 = require("./rating/rating.module");
const ride_module_1 = require("./ride/ride.module");
const rider_module_1 = require("./rider/rider.module");
const user_module_1 = require("./user/user.module");
const image_module_1 = require("./image/image.module");
const verification_module_1 = require("./verification/verification.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
            }),
            user_module_1.UserModule,
            rider_module_1.RiderModule,
            customer_module_1.CustomerModule,
            car_module_1.CarModule,
            ride_module_1.RideModule,
            location_module_1.LocationModule,
            address_module_1.AddressModule,
            message_module_1.MessageModule,
            booking_module_1.BookingModule,
            rating_module_1.RatingModule,
            image_module_1.ImageModule,
            verification_module_1.VerificationModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map