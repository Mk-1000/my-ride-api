import { ChildEntity, Column, OneToMany } from 'typeorm';
import { Rating } from './rating.entity';
import { User } from './user.entity';

@ChildEntity()
export class Customer extends User {

  @Column({ nullable: true })
  loyaltyPoints: number;
  
  @OneToMany(() => Rating, (rating) => rating.customer)
  ratings: Rating[];
}
