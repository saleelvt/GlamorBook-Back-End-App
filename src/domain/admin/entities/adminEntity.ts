
import { ObjectId } from "mongoose";

export interface AdminEntity {
    _id:ObjectId;
    userName?:string;
    email:string;
    password:string;
    role?: "user" | "admin" | "salon";
    userList?:ObjectId[];
    salonList?:ObjectId[];
}