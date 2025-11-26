import type { ObjectId } from "mongoose";

export interface IRoutine {
  class: string;              // class/grade
  section?: string;           // optional section
  day: string;                // e.g., "Monday"
  subject: string;            // subject name
  teacherId?: ObjectId;         // optional teacher reference
  startTime: string;          // ISO time string or "09:00"
  endTime: string;            // ISO time string or "10:00"
  room?: string;              // classroom or room number
}
