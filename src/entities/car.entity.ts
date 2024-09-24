// src/entities/car.entity.ts
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rider } from './rider.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column({ nullable: true })
  color: string;

  @ManyToOne(() => Rider, (rider) => rider.cars, { onDelete: 'CASCADE' })  // A rider can have multiple cars
  rider: Rider;
}
