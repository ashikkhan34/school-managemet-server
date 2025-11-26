import type { ObjectId } from "mongoose";

export interface IResult {
  studentId: ObjectId;           // student reference
  class: string;               // class/grade
  session: string;             // academic session
  term: string;                // e.g., "1st Term", "2nd Term"
  subjects: {
    name: string;
    marks: number;
    grade?: string;
  }[];
  totalMarks?: number;
  gpa?: number;
  remarks?: string;
}
