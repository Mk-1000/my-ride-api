import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("../entities/user.entity").User>;
    login(loginUserDto: LoginUserDto): Promise<import("../entities/user.entity").User>;
    remove(id: string): Promise<void>;
}
