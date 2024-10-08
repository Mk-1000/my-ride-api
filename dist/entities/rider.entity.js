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
exports.Rider = void 0;
const typeorm_1 = require("typeorm");
const car_entity_1 = require("./car.entity");
const rating_entity_1 = require("./rating.entity");
const user_entity_1 = require("./user.entity");
let Rider = class Rider extends user_entity_1.User {
};
exports.Rider = Rider;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rider.prototype, "licenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Rider.prototype, "licenseImageUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => car_entity_1.Car, (car) => car.rider),
    __metadata("design:type", Array)
], Rider.prototype, "cars", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rating_entity_1.Rating, (rating) => rating.rider),
    __metadata("design:type", Array)
], Rider.prototype, "ratings", void 0);
exports.Rider = Rider = __decorate([
    (0, typeorm_1.ChildEntity)()
], Rider);
//# sourceMappingURL=rider.entity.js.map