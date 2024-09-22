import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.customer, { nullable: false })
  @JoinColumn()  // This decorator creates a foreign key column in the Customer table
  user: User;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  loyaltyPoints: number;
}
