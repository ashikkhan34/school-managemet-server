import { Schema, model } from "mongoose";
import type { INotice } from "./notice.interface.js";

const noticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    audience: { type: String, enum: ["all", "students", "teachers", "staff"], default: "all" },
    attachment: { type: String },
  },
  { timestamps: true }
);

export const NoticeModel = model<INotice>("Notice", noticeSchema);
