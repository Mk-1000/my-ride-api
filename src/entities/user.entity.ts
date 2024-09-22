import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Rider } from './rider.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  encryptedPassword: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @OneToOne(() => Rider, (rider) => rider.user, { nullable: true })
  rider: Rider;

  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  customer: Customer;
}
