
import { Schema,model } from "mongoose";

export  interface IOtp{
    email:string;
    otp:string;
    createdAt:Date;

}


const otpSchema=new Schema<IOtp>({
    email:{
        type:String,
        required:true,
        unique:true ,
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:"1m"
    }
});

export const Otp=model<IOtp>("Otp",otpSchema)