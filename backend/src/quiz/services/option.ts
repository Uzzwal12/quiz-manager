import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dtos/option';
import { Questions } from '../entities/quiestions.entity';
import { OptionRepository } from '../repositories/option.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async createOption(option: CreateOptionDto, question: Questions) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];

    await question.save();

    return newOption;
  }
}
