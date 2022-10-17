import { CreateLessonDTO } from "../dtos/create-lesson-dto";

export interface ILessonRepository {
  create(data: CreateLessonDTO): Promise<void>;
}