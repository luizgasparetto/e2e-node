import { HttpResponse } from "../protocols/http-response";

export interface Controller<T = any> {
  handle(request: T): Promise<HttpResponse>
}