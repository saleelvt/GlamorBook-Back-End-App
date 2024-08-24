import { ObjectId } from "mongoose";

export interface UserEntity {
  _id?: ObjectId;
  userName?: string;
  email: string;
  password: string;
  role?: "user" | "admin" | "salon";
  otp?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  city?: string;
}
