import { Controller } from "../../../../core/infra/contracts/controller";
import { HttpResponse } from "../../../../core/infra/protocols/http-response";
import { CreateLessonDTO } from "../../domain/dtos/create-lesson-dto";
import { CreateLessonUsecase } from "../../domain/usecases/create-lesson-usecase";

export class CreateLessonController implements Controller<CreateLessonDTO> {
  constructor(private createLessonUsecase: CreateLessonUsecase) { }

  async handle(request: CreateLessonDTO): Promise<HttpResponse> {
    const { title } = request;

    await this.createLessonUsecase.execute({ title });

    return HttpResponse.created("Lesson created");
  }
}