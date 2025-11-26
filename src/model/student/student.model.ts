import { Schema, model } from "mongoose";
import type { IStudent } from "./student.interface.js";

const studentSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: { type: String, required: true },

    department: { type: String, required: true },

    roll: { type: String, required: true, unique: true },

    registration: { type: String, required: true, unique: true },

    class: { type: String, required: true },

    phone: { type: String },

    address: { type: String },

    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const StudentModel = model<IStudent>("Student", studentSchema);
