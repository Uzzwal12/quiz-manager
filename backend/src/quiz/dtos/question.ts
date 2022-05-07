import { IsNotEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question is required.' })
  question: string;
}
