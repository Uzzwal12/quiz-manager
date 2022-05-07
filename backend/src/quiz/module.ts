import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/questions';
import { QuizController } from './controllers/quiz';
import { QuestionsRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionService } from './services/question';
import { QuizService } from './services/quiz';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionsRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
