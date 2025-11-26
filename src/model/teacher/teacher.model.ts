import { Schema, model } from "mongoose";
import type { ITeacher } from "./teacher.interface.js";

const educationSchema = new Schema(
  {
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    passingYear: { type: Number, required: true },
    result: { type: String, required: true },
  },
  { _id: false }
);

const teacherSchema = new Schema<ITeacher>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },

    gender: { type: String, enum: ["male", "female", "other"], required: true },

    dateOfBirth: { type: String, required: true },

    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },

    subject: { type: String, required: true },
    experienceYears: { type: Number, default: 0 },
    joiningDate: { type: String, required: true },
    salary: { type: Number, required: true },

    education: { type: [educationSchema], required: true },

    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const TeacherModel = model<ITeacher>("Teacher", teacherSchema);
