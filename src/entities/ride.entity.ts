import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';
import { Rider } from './rider.entity';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  startLocation: string;

  @Column({ type: 'varchar', length: 255 })
  endLocation: string;

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
