import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionContoller } from './controllers/option';
import { QuestionController } from './controllers/questions';
import { QuizController } from './controllers/quiz';
import { OptionRepository } from './repositories/option.repository';
import { QuestionsRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { OptionService } from './services/option';
import { QuestionService } from './services/question';
import { QuizService } from './services/quiz';

@Module({
  controllers: [QuizController, QuestionController, OptionContoller],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionsRepository,
      OptionRepository,
    ]),
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
