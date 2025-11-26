import { Schema, model, Types } from "mongoose";
import type { IRoutine } from "./routine.interface.js";

const routineSchema = new Schema<IRoutine>(
  {
    class: { type: String, required: true },
    section: { type: String },
    day: { type: String, required: true },
    subject: { type: String, required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: "Teacher" },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    room: { type: String },
  },
  { timestamps: true }
);

export const RoutineModel = model<IRoutine>("Routine", routineSchema);
