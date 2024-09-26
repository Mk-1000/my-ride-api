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
exports.User = void 0;
const bcrypt = require("bcrypt");
const typeorm_1 = require("typeorm");
const address_entity_1 = require("./address.entity");
let User = class User {
    async hashPassword() {
        this.encryptedPassword = await bcrypt.hash(this.encryptedPassword, 10);
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "encryptedPassword", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profilePictureUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'CUSTOMER' }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_entity_1.Address, { cascade: true, eager: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", address_entity_1.Address)
], User.prototype, "address", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.TableInheritance)({ column: { type: 'varchar', name: 'userType' } })
], User);
//# sourceMappingURL=user.entity.js.map