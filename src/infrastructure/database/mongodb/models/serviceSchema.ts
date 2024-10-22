import { Schema, model } from "mongoose";

const serviceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: { type: Number, required: true },
    salonId: {
      type: Schema.Types.ObjectId,
      ref: "Salon",
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);
export const Service= model("Service",serviceSchema)

