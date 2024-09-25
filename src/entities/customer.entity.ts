import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

@ChildEntity()
export class Customer extends User {
  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  loyaltyPoints: number;
}
