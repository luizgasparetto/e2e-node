import { LessonRepositoryImpl } from "../../../../../modules/lesson/data/repositories/lesson-repository-impl";
import { CreateLessonUsecase } from "../../../../../modules/lesson/domain/usecases/create-lesson-usecase";
import { CreateLessonController } from "../../../../../modules/lesson/presentation/controllers/create-lesson-controller";

export class CreateLessonFactory {
  static instance(): CreateLessonController {
    const lessonRepository = new LessonRepositoryImpl();

    const createLessonUsecase = new CreateLessonUsecase(lessonRepository);

    const createLessonController = new CreateLessonController(createLessonUsecase);

    return createLessonController;
  }
}