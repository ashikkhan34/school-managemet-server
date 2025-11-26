import { Schema, model } from "mongoose";
import type { IStaff } from "./staff.interface.js";

const staffSchema = new Schema<IStaff>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    phone: { type: String },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    joiningDate: { type: String, required: true },
    address: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const StaffModel = model<IStaff>("Staff", staffSchema);
