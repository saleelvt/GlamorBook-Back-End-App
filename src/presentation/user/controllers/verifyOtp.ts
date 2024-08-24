import { createUserUseCase } from "./../../../application/user/useCases/createUserUseCase";
import { verifyOtpUseCase } from "./../../../application/user/useCases/verifyOtpUseCase";
import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { Otp } from "@/infrastructure/database/mongodb/models/otpShema";
import { hashPassword } from "@/utilities/bcrypt";

import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { NextFunction, Request, Response } from "express";

export const verifyOtpController = (dependencies: IDependencies) => {
  const {
    useCases: { verifyOtpUseCase, createUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(" test case 2 this is my req.body from verify otp section ");

      const { otp, email, userName, password, role } = req.body;

      const isOtpVerified = await verifyOtpUseCase(dependencies).execute(
        email,
        otp
      );
      console.log(isOtpVerified, "otpverified or not");

      if (isOtpVerified) {
        const hashedPassword = await hashPassword(password);

        // cretae the user
        const user = await createUserUseCase(dependencies).execute({
          email,
          userName,
          password: hashedPassword,
          role: role || "user",
        });

        if (!user) {
          throw new Error("User creation failed");
        }
        // Delete the OTP record after successful verification and user creation
        await Otp.deleteOne({ email });

        const accessToken = generateAccessToken({
          _id: String(user._id),
          email: user.email!,
          role: user.role!,
        });

        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });
        res.status(200).json({
          success: true,
          message: "OTP verified and user created successfully",
          data: user,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Invalid OTP",
        });
      }
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ error: "Error verifying OTP" });
    }
  };
};
