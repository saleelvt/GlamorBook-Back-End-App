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
  phone?: string | null;
  comments?:string| null;
  otp?: string[];
  profilePicture?: string | null;
  licenseDocument?: string;
  images?: { url: string; alt?: string }[] | null; // Structured array for images
  role?: "salon";
  status?: string | null;
  seat?: object[];
  createdAt?: Date;
  updatedAt?: Date;
  latitude?: number | null; // Add latitude
  longitude?: number | null; // Add longitude
}


