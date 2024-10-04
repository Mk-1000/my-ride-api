import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ride } from './ride.entity';
import { User } from './user.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ride, (ride) => ride.ratings, { eager: true })
  ride: Ride;

  @ManyToOne(() => User, (user) => user.givenRatings, { eager: true })
  rater: User; // The user giving the rating

  @ManyToOne(() => User, (user) => user.receivedRatings, { eager: true })
  ratee: User; // The user receiving the rating

  @Column()
  score: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @CreateDateColumn()
  ratingDate: Date;
}
