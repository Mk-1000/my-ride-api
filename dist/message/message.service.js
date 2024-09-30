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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("../entities/message.entity");
const user_service_1 = require("../user/user.service");
let MessageService = class MessageService {
    constructor(messageRepository, userService) {
        this.messageRepository = messageRepository;
        this.userService = userService;
    }
    async createMessage(createMessageDto) {
        const sender = await this.userService.findOne(createMessageDto.senderId);
        const receiver = await this.userService.findOne(createMessageDto.receiverId);
        const newMessage = this.messageRepository.create({
            sender,
            receiver,
            content: createMessageDto.content,
        });
        return this.messageRepository.save(newMessage);
    }
    async getMessagesByUser(userId) {
        return this.messageRepository.find({
            where: [{ sender: { id: userId } }, { receiver: { id: userId } }],
        });
    }
    async markAsReceived(messageId) {
        const message = await this.messageRepository.findOneBy({ id: messageId });
        if (!message) {
            throw new Error('Message not found');
        }
        message.status = message_entity_1.MessageStatus.RECEIVED;
        return this.messageRepository.save(message);
    }
    async markAsRead(messageId) {
        const message = await this.messageRepository.findOneBy({ id: messageId });
        if (!message) {
            throw new Error('Message not found');
        }
        message.status = message_entity_1.MessageStatus.READ;
        return this.messageRepository.save(message);
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], MessageService);
//# sourceMappingURL=message.service.js.map