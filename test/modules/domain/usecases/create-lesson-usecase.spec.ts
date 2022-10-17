import { CreateLessonUsecase } from "../../../../src/modules/lesson/domain/usecases/create-lesson-usecase";
import { InMemoryLessonRepository } from "../../data/repositories/in-memory-lesson-repository";

describe("Create Lesson Usecase", () => {
  let lessonRepository: InMemoryLessonRepository;
  let sut: CreateLessonUsecase;

  beforeEach(() => {
    lessonRepository = new InMemoryLessonRepository();
    sut = new CreateLessonUsecase(lessonRepository);
  });

  test("should be able to create a new lesson", async () => {
    await expect(sut.execute({ title: "New title" })).resolves.not.toThrow();

    expect(lessonRepository.lessons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "New title" })
      ])
    );
  })

  test("should be NOT be able to create a new lesson", async () => {
    await expect(sut.execute({ title: "" })).rejects.toThrow();

    expect(lessonRepository.lessons).toEqual([]);
  })
});