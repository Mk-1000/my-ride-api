import { Repository } from 'typeorm';
import { Address } from '../entities/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressService {
    private addressRepository;
    constructor(addressRepository: Repository<Address>);
    findAll(): Promise<Address[]>;
    findOne(id: number): Promise<Address>;
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    update(id: number, updateAddressDto: UpdateAddressDto): Promise<Address>;
    remove(id: number): Promise<void>;
}
