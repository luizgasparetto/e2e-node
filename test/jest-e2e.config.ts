import jestConfig from "../jest.config";

export default {
  ...jestConfig,
  testEnviroment: '../prisma/prisma/prisma-test-enviroment.ts',
  testRegex: '.e2e-spec.ts'
}