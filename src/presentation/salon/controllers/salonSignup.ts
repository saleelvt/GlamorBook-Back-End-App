import { dependencies } from "@/boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import { Otp } from "@/infrastructure/database/mongodb/models/otpSchema";
import { generateOtp } from "@/utilities/otp/genarateOtp";
import { sendOtp } from "@/utilities/otp/sendOtp";
import { NextFunction, Request, Response } from "express";

export const salonSignupController = (dependencies: ISalonDependencies) => {
  const {
    useCases: { checkSalonEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const salonCredentials = req.body;
    console.log("in side of the signup of salon and details", salonCredentials);

    if (salonCredentials) {
      try {
        const salonExist = await checkSalonEmailUseCase(dependencies).execute(
          req.body.email
        );

        if (salonExist) {
          return res.status(409).send({ error: "E-mail already in use" });
        }

        // Generate OTP
        const otp = generateOtp();
        console.log(otp, "Generated OTP");
        let OtpExist = await Otp.findOne({ email: salonCredentials.email });
        let dbOtp;

        if (OtpExist) {
          dbOtp = await Otp.findByIdAndUpdate(
            { email: salonCredentials.email },
            { $set: { otp, createdAt: new Date() } }
          );
        } else {
          dbOtp = await Otp.create({ email: salonCredentials.email, otp });
        }

        if (dbOtp) {
          await sendOtp(salonCredentials.email, otp);
        }
        console.log("last salon data ", salonCredentials);

        res.status(200).json({
          success: true,
          message: "An OTP has been sent to your email.",
          ...salonCredentials,
        });
      } catch (error: any) {
        console.log(error, "<<Something went wrong in theater signup>>");
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid theater credentials",
      });
    }
  };
};
