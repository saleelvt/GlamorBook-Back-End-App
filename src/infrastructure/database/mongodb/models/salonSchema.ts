import { SalonEntity } from "@/domain/salon/entities";
import { Schema, model, Types } from "mongoose";

const salonSchema = new Schema(
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
      enum: ["user", "admin", "salon"],
      default: "salon",
    },
    status: {
      type: String,
      enum: ["pending", "active", "blocked"],
      default: "pending",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    licenseDocument:{
      type:String,
      default:''
    },
    salonName: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    phone: {
      type: String,
    },
    images: [{ type: String, default: null }],
    seat: [{ type: Object }],
    latitude: { type: Number, default: null }, // Latitude as a number
    longitude: { type: Number, default: null }, // Longitude as a number
  },
  {
    timestamps: true,
  }
);



export const Salon = model<SalonEntity>("Salon", salonSchema);
