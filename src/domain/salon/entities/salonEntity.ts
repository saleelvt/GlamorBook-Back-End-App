import { ObjectId } from "mongoose";

export interface SalonEntity {
  _id?: ObjectId;
  userName?: string | null;
  email: string;
  password: string;
  confirmPassword?: string;
  salonName?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zipCode?: string | null;
  phone?: string | null;
  otp?: string[];
  profilePicture?: string | null;
  images?: string[] | null;
  role?: "salon";
  status?: string | null;
  seat?: object[];
  createdAt?: Date;
  updatedAt?: Date;
  latitude?: number | null; // Add latitude
  longitude?: number | null; // Add longitude
}
