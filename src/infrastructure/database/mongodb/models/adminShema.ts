import { AdminEntity } from "@/domain/admin/entities/adminEntity";
import { model, Schema } from "mongoose";

const adminSchema = new Schema<AdminEntity>({
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
    default: "admin",
  },
  userList:[{ type: Schema.Types.ObjectId, ref: "User" }],
//   salonList:{ type: Schema.Types.ObjectId, ref: "Theater" }]
},
{
    timestamps: true,
  }
);



export const Admin=model<AdminEntity>("Admin",adminSchema)