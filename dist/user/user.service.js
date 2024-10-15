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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        return this.userRepository.findOneBy({ id });
    }
    async create(createUserDto) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);
        const newUser = this.userRepository.create({
            ...createUserDto,
            encryptedPassword: hashedPassword,
            address: createUserDto.address,
        });
        return this.userRepository.save(newUser);
    }
    async login(loginUserDto) {
        const user = await this.userRepository.findOne({ where: { email: loginUserDto.email } });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        console.log('User found:', user);
        console.log('Input password:', loginUserDto.password);
        console.log('Stored hashed password:', user.encryptedPassword);
        const isMatch = await bcrypt.compare(loginUserDto.password, user.encryptedPassword);
        if (!isMatch) {
            console.log('Password does not match');
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        console.log('Password matched');
        return user;
    }
    async remove(id) {
        await this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map