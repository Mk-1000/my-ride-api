import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

@ChildEntity()
export class Customer extends User {

  @Column({ nullable: true })
  loyaltyPoints: number;
}
