import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dtos/option';
import { OptionService } from '../services/option';
import { QuestionService } from '../services/question';

@Controller('question/option')
export class OptionContoller {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      createOption.questionId,
    );

    const option = await this.optionService.createOption(
      createOption,
      question,
    );

    return { question, option };
  }
}
