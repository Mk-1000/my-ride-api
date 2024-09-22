import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Rider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licenseNumber: string;

  @Column({ nullable: true })
  licenseImageUrl: string;

  @OneToOne(() => User, (user) => user.rider, { nullable: false })
  @JoinColumn()  // This creates a foreign key column in the Rider table
  user: User;
}
