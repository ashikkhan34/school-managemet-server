import { Schema, model, Types } from "mongoose";
import type { IResult } from "./result.interface.js";

const subjectSchema = new Schema(
  {
    name: { type: String, required: true },
    marks: { type: Number, required: true },
    grade: { type: String },
  },
  { _id: false }
);

const resultSchema = new Schema<IResult>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    class: { type: String, required: true },
    session: { type: String, required: true },
    term: { type: String, required: true },
    subjects: { type: [subjectSchema], required: true },
    totalMarks: { type: Number },
    gpa: { type: Number },
    remarks: { type: String },
  },
  { timestamps: true }
);

export const ResultModel = model<IResult>("Result", resultSchema);
