import { Lesson } from "@prisma/client";
import { LessonEntity } from "../../domain/entities/lesson-entity";

export class LessonEntityMapper {
  toDomain(lesson: Lesson): LessonEntity {
    return new LessonEntity(
      lesson.title,
      lesson.created_at,
      lesson.updated_at,
      lesson.description,
      lesson.id,
    );
  }
}