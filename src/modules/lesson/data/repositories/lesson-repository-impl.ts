import { prisma } from "../../../../core/infra/prisma/client";
import { CreateLessonDTO } from "../../domain/dtos/create-lesson-dto";

import { ILessonRepository } from "../../domain/repositories/i-lesson-repository";

export class LessonRepositoryImpl implements ILessonRepository {
  async create(data: CreateLessonDTO): Promise<void> {
    const { title, description } = data;

    await prisma.lesson.create({ data: { title, description } });
  }
}