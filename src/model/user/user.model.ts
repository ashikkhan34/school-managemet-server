import { Schema, model } from "mongoose";
import type { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      default: "teacher",
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("User", userSchema);
