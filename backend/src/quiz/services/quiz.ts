import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dtos/quiz';
import { Quiz } from '../entities/quiz.entiry';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}
  async getAllQuiz() {
    return this.quizRepository.find();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return this.quizRepository.findOne(id, { relations: ['questions'] });
  }

  async createNewQuiz(quiz: CreateQuizDto): Promise<CreateQuizDto & Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
