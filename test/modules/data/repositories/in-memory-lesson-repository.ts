import { CreateLessonDTO } from "../../../../src/modules/lesson/domain/dtos/create-lesson-dto";
import { LessonEntity } from "../../../../src/modules/lesson/domain/entities/lesson-entity";
import { ILessonRepository } from "../../../../src/modules/lesson/domain/repositories/i-lesson-repository";

export class InMemoryLessonRepository implements ILessonRepository {
  public lessons: LessonEntity[] = [];

  async create(data: CreateLessonDTO): Promise<void> {
    const lesson = new LessonEntity(
      data.title,
      new Date(),
      new Date(),
      data.description ?? null
    );

    this.lessons.push(lesson);
  }
}