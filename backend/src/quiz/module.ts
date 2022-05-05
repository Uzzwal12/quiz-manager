import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz';
import { QuizService } from './services/quiz';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
