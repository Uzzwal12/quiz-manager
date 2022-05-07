import { EntityRepository, Repository } from 'typeorm';
import { Questions } from '../entities/quiestions.entity';

@EntityRepository(Questions)
export class QuestionsRepository extends Repository<Questions> {}
