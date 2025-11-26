import type { ObjectId } from "mongoose";

export interface IAttendance {
  studentId: ObjectId;       // student reference
  teacherId?: ObjectId;      // optional teacher reference
  date: string;            // attendance date ISO string
  status: "present" | "absent";
  remarks?: string;
}
