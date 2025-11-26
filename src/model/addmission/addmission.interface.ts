import type { ObjectId } from "mongoose";

export interface IAdmission {
  studentId: ObjectId;        // student reference
  class: string;            // class or grade
  session: string;          // academic session
  admissionDate: string;    // ISO date string
  status: "pending" | "approved" | "rejected";
  fee?: number;
  notes?: string;
}
