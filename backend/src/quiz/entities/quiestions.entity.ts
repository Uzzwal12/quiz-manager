import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Option } from './options.entity';
import { Quiz } from './quiz.entiry';

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

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
