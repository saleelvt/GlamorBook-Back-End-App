import { ISalonDependencies } from '@/application/salon/interfaces/ISalonDependencies';
import { dependencies } from './../../../boot/dependencies';
import { NextFunction, Request, Response } from "express";

export const salonVerifyOtpController = async(dependencies:ISalonDependencies)=>{


    return async (req: Request, res: Response, next: NextFunction)=>{

            try {
                const { otp, email, userName, password } = req.body;
                console.log("my dataa of verify otp controller  ",otp, email, userName, password);
                
            }catch (error: any) {
                console.error("Error verifying OTP:", error);
                res.status(500).json({ error: "Error verifying OTP" });
              }

    }


}