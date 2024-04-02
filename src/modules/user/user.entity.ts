import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 255 })
  birthday: string;

  @Column()
  email: string;
}
