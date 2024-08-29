
import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { generateOtp } from "@/utilities/otp/genarateOtp";
import { Otp } from "@/infrastructure/database/mongodb/models/otpSchema";
import { sendOtp } from "@/utilities/otp/sendOtp";
import { Request, Response, NextFunction } from "express";


export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { checkUserEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("my req,body 1", req.body);

    const userCredentials = req.body;

    if (!userCredentials || !userCredentials.email) {
      return res.status(400).json({
        success: false,
        message: "Invalid user credentials",
      });
    }

    try {
      console.log("checking the email");

      const userExist = await checkUserEmailUseCase(dependencies).execute(
        userCredentials.email
      );
      if (userExist) {
        console.log("email have ");
        return res.status(409).send({ error: "E-mail already signed " });
      }

      const otp = generateOtp();
      console.log(otp, "this is genarated otp ");

      // Check if OTP entry already exists
      const emailExist = await Otp.findOne({ email: userCredentials.email });
      let dbOtp;
      if (emailExist) {
        console.log('otp unde');
        
        dbOtp = await Otp.findByIdAndUpdate(
          { email: userCredentials.email, otp },
          { $set: { otp, createdAt: new Date() } }
        );
      } else {
        dbOtp = await Otp.create({ email: userCredentials.email, otp });
      }
      if (dbOtp) {
        await sendOtp(userCredentials.email, otp);
      }
      delete userCredentials.confirmPassword; // exclude confirmPassword
      res.status(200).json({
        success: true,
        message: "An OTP has been sent to your email ",
        ...userCredentials, // sending usercredentials without confirmPassword directily
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
