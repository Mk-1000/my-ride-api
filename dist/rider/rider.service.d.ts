import { Repository } from 'typeorm';
import { Rider } from '../entities/rider.entity';
import { CreateRiderDto } from './dto/create-rider.dto';
export declare class RiderService {
    private riderRepository;
    constructor(riderRepository: Repository<Rider>);
    createRider(createRiderDto: CreateRiderDto): Promise<Rider>;
    findAll(): Promise<Rider[]>;
    findOne(id: number): Promise<Rider>;
}
