import { Repository } from 'typeorm';
import { Rider } from '../entities/rider.entity';
import { UserService } from '../user/user.service';
import { CreateRiderDto } from './dto/create-rider.dto';
export declare class RiderService {
    private riderRepository;
    private userService;
    constructor(riderRepository: Repository<Rider>, userService: UserService);
    create(createRiderDto: CreateRiderDto): Promise<Rider>;
    findAll(): Promise<Rider[]>;
    findOne(id: number): Promise<Rider>;
}
