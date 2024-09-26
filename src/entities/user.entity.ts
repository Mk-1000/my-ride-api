import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Address } from './address.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'userType' } })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  encryptedPassword: string;

  @BeforeInsert()
  async hashPassword() {
    this.encryptedPassword = await bcrypt.hash(this.encryptedPassword, 10);
  }

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ default: 'CUSTOMER' })
  userType: string;

  // One-to-One relationship with Address
  @OneToOne(() => Address, { cascade: true, eager: true })  // Cascade ensures address is saved when saving the user
  @JoinColumn()  // This defines that the User entity owns the relationship and will store the foreign key
  address: Address;
}
