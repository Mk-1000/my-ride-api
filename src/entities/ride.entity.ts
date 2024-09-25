import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';
import { Location } from './location.entity';
import { Rider } from './rider.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Location, { cascade: true })
  @JoinColumn({ name: 'start_location_id' })
  startLocation: Location;

  @ManyToOne(() => Location, { cascade: true })
  @JoinColumn({ name: 'end_location_id' })
  endLocation: Location;

  @Column({ type: 'date' })
  rideDate: Date;

  @Column({ type: 'time' })
  rideTime: string;

  @Column({ type: 'int' })
  availableSeats: number;

  @Column({ type: 'float' })
  pricePerSeat: number;

  @ManyToOne(() => Rider)
  @JoinColumn({ name: 'driver_id' })
  driver: Rider;

  @ManyToOne(() => Car)
  @JoinColumn({ name: 'car_id' })
  car: Car;
}
