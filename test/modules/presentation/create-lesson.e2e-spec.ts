import request from 'supertest';
import { app } from '../../../src/core/infra/http/app';

test('[E2E] CreateLesson', async () => {
  const response = await request(app).post('/lesson').send({ title: 'Nova aula' });

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
});