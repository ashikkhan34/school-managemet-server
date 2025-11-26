import { Schema, model, Types } from "mongoose";
import type { IAttendance } from "./attendance.interface.js";

const attendanceSchema = new Schema<IAttendance>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: "Teacher" },
    date: { type: String, required: true },
    status: { type: String, enum: ["present", "absent"], required: true },
    remarks: { type: String },
  },
  { timestamps: true }
);

export const AttendanceModel = model<IAttendance>("Attendance", attendanceSchema);
