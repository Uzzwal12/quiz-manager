import { IsNotEmpty, max } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Quiz must have a title.' })
  title: string;
  @IsNotEmpty({ message: 'Desctiption is required.' })
  description: string;
}
