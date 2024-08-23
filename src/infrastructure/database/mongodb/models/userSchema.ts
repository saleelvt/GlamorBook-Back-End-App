import { Schema, model } from "mongoose";
import { UserEntity } from "@/domain/user/entities";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user"],
      default: "user",
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }

  
);

export const User = model<UserEntity>("Users", userSchema);
