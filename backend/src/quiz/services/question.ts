import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dtos/question';
import { Quiz } from '../entities/quiz.entiry';
import { QuestionsRepository } from '../repositories/question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionsRepository)
    private questionRepository: QuestionsRepository,
  ) {}
  async getAllQuiz() {
    return this.questionRepository.find({ relations: ['quiz', 'options'] });
  }

  async createNewQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];

    await quiz.save();

    return newQuestion;
  }

  async findQuestionById(questionId: number) {
    return await this.questionRepository.findOne(questionId, {
      relations: ['quiz', 'options'],
    });
  }
}
