import { Rider } from '../entities/rider.entity';
import { CreateRiderDto } from './dto/create-rider.dto';
import { RiderService } from './rider.service.spec';
export declare class RiderController {
    private readonly riderService;
    constructor(riderService: RiderService);
    create(createRiderDto: CreateRiderDto): Promise<Rider>;
    findAll(): Promise<Rider[]>;
}
