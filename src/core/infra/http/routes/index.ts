import { Router } from "express";
import { ExpressRouteAdapter } from "../../adapters/express-route-adapter";
import { CreateLessonFactory } from "../factories/controllers/create-lesson-factory";

export const routes = Router();

routes.post("/lesson", ExpressRouteAdapter.adapt(CreateLessonFactory.instance()));