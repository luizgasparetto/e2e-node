import { CreateLessonDTO } from "../dtos/create-lesson-dto";

import { ILessonRepository } from "../repositories/i-lesson-repository";

export class CreateLessonUsecase {
  constructor(private lessonRepository: ILessonRepository) { }

  async execute(data: CreateLessonDTO): Promise<void> {
    if (!data.title) {
      throw new Error();
    }

    await this.lessonRepository.create(data);
  }
}