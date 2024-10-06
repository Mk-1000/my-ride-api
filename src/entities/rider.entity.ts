import { ChildEntity, Column, OneToMany } from 'typeorm';
import { Car } from './car.entity';
import { Rating } from './rating.entity';
import { User } from './user.entity';

@ChildEntity()
export class Rider extends User {
  @Column()
  licenseNumber: string;

  @Column({ nullable: true })
  licenseImageUrl: string;

  @OneToMany(() => Car, (car) => car.rider)
  cars: Car[];
  
  @OneToMany(() => Rating, (rating) => rating.rider)
  ratings: Rating[];
}
