import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/question';
import { CreateQuizDto } from '../dtos/quiz';
import { QuestionService } from '../services/question';
import { QuizService } from '../services/quiz';

@Controller('questions')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}
  @Get('/')
  async getAll() {
    return await this.questionService.getAllQuiz();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() questionData: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(questionData.quizId);
    return await this.questionService.createNewQuestion(questionData, quiz);
  }
}
