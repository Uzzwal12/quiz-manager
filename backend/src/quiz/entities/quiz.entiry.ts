import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Questions } from './quiestions.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @OneToMany(() => Questions, (question) => question.quiz)
  questions: Questions[];
}
