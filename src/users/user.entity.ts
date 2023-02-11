import {
  AfterInsert,
  AfterRemove,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInser() {
    console.log('new user with id', this.id);
  }
  @AfterRemove()
  logRemove() {
    console.log('user removed with id', this.id);
  }
}
