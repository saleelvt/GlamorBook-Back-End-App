

import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { Otp } from "@/infrastructure/database/mongodb/models/otpShema";
import { generateOtp } from "@/utilities/otp/genarateOtp";
import { sendOtp } from "@/utilities/otp/sendOtp";
import { Request, Response, NextFunction } from "express";

export const resendOtpController = (dependencies: IDependencies) => {
  const {
    useCases: { checkUserEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const userCredentials = req.body;
    console.log("userdata in controller", userCredentials);
    if (!userCredentials || !userCredentials.email) {
      return res.status(400).json({
        success: false,
        message: "Invalid user credentials",
      });
    }

    try {
      const userExist = await checkUserEmailUseCase(dependencies).execute(
        userCredentials.email
      );
      // Checking if user already exists
      if (userExist) {
        return res.status(409).send({ error: "E-mail already in use" });
      }

      // Generate OTP
      const otp = generateOtp();
      console.log(otp, "Generated OTP");

      // Check if OTP entry already exists
      const emailExist = await Otp.findOne({ email: userCredentials.email });
      let dbOtp;

      if (emailExist) {
        dbOtp = await Otp.findOneAndUpdate(
          { email: userCredentials.email },
          { $set: { otp, createdAt: new Date() } }
        );
      } else {
        dbOtp = await Otp.create({ email: userCredentials.email, otp });
      }

      // Send OTP to email
      if (dbOtp) {
        await sendOtp(userCredentials.email, otp);
      }

      res.status(200).json({
        success: true,
        message: "An OTP has been sent to your email.",
      });
    } catch (error) {
      console.error(error, "<< Something went wrong in user signup >>");
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };
};
