import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
@Entity()
export class user_info_table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 255 })
  birthday: string;

  @Column()
  email: string;
}
