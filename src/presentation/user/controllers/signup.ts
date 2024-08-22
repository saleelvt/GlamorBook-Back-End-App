import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { generateOtp } from "@/utilities/otp/genarateOtp";
import { Otp } from "@/infrastructure/database/mongodb/models/otpShema";

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
      if (userExist){
        console.log('email have ');
        return res.status(409).send({ error: "E-mail already signed " })
      }



      const otp=generateOtp()
      console.log(otp,'this is genarated otp ');

      // Check if OTP entry already exists
      const emailExist=await Otp.findOne({email:userCredentials.email});
      let dbOtp;
      if(emailExist){
        dbOtp=await Otp.findByIdAndUpdate({email:userCredentials.email,otp},
          {$set:{otp,createdAt:new Date()}}
        )
      }else{
        dbOtp=await Otp.create({email:userCredentials.email,otp})
      }
      


    } catch (error) {}
  };
};

