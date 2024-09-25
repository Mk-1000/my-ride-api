import { Repository } from 'typeorm';
import { Location } from '../entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationService {
    private locationRepository;
    constructor(locationRepository: Repository<Location>);
    create(createLocationDto: CreateLocationDto): Promise<Location>;
    findOne(id: number): Promise<Location>;
    findAll(): Promise<Location[]>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location>;
    remove(id: number): Promise<void>;
}
