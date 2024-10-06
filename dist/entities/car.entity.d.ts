import { Image } from './image.entity';
import { Rider } from './rider.entity';
export declare class Car {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    rider: Rider;
    images: Image[];
}
