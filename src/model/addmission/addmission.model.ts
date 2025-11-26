import { Schema, model, Types } from "mongoose";
import type { IAdmission } from "./addmission.interface.js";

const admissionSchema = new Schema<IAdmission>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    class: { type: String, required: true },
    session: { type: String, required: true },
    admissionDate: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    fee: { type: Number },
    notes: { type: String },
  },
  { timestamps: true }
);

export const AdmissionModel = model<IAdmission>("Admission", admissionSchema);
