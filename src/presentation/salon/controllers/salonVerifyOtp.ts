import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { dependencies } from "./../../../boot/dependencies";
import { NextFunction, Request, Response } from "express";
import { hashPassword } from "@/utilities/bcrypt";
import { Otp } from "@/infrastructure/database/mongodb/models/otpSchema";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateRefreshToken } from "@/utilities/jwt/generateRefreshToken";

export const salonVerifyOtpController = (dependencies: ISalonDependencies) => {
  const {
    useCases: { verifySalonOtpUseCase, createSalonUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        otp,
        email,
        userName,
        password,
        role,
        status,
        city,
        images,
        latitude,
        longitude,
        licenseDocument,
        phone,
        profilePicture,
        seat,
        salonName,
        state,
      } = req.body;


      console.log(
        "my dataa of verify otp controller  ",
        otp,
        email,
        password,
        role,
        status,
        userName,
        city,
        images,
        latitude,
        longitude,
        licenseDocument,
        phone,
        profilePicture,
        seat,
        salonName,
        state
      );

      const isOtpVerified = await verifySalonOtpUseCase(dependencies).execute(
        email,
        otp
      );




      if (isOtpVerified) {
        const hashedPassword = await hashPassword(password);

        // create the salon
        const Mysalon = await createSalonUseCase(dependencies).execute({
          email,
          userName,
          password: hashedPassword,
          role: "salon",
          status: "pending",
          city,
          images,
          latitude,
          longitude,
          licenseDocument,
          phone,
          profilePicture,
          seat,
          salonName,
          state,
        });



        


        if (!Mysalon) throw new Error("Salon creation failed");
        await Otp.deleteOne({ email });
        const accessToken = generateAccessToken({
          _id: String(Mysalon._id),
          email: Mysalon.email!,
          role: Mysalon.role!,
        });
        const refreshToken = generateRefreshToken({
          _id: String(Mysalon._id),
          email: Mysalon.email!,
          role: Mysalon.role!,
        });


        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
        });

        res.status(200).json({
          success: true,
          message: "OTP verified and Salon created Successfully",
          data: Mysalon,
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



