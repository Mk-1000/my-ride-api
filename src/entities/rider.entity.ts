import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './car.entity';
import { User } from './user.entity';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licenseNumber: string;

  @Column({ nullable: true })
  licenseImageUrl: string;

  @OneToOne(() => User, (user) => user.rider, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToMany(() => Car, (car) => car.rider)
  cars: Car[];
}
