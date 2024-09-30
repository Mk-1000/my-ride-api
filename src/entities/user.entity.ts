import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';
import { Address } from './address.entity';
import { Message } from './message.entity';

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

  @OneToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Message, (message) => message.sender)
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  receivedMessages: Message[];
}
