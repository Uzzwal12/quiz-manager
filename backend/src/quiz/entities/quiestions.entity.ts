import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The questions unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;
}
