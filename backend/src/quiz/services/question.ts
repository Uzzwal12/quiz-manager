import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dtos/question';
import { QuestionsRepository } from '../repositories/question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionsRepository)
    private questionRepository: QuestionsRepository,
  ) {}
  async getAllQuiz() {
    return this.questionRepository.find();
  }

  async createNewQuiz(question: CreateQuestionDto) {
    return await this.questionRepository.save(question);
  }
}
