import crypto from "crypto";

export class LessonEntity {
  id?: string;
  title: string;
  description: string | null;
  created_at: Date;
  updated_at: Date;

  constructor(title: string, created_at: Date, updated_at: Date, description: string | null, id?: string) {
    this.id = id ?? crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}