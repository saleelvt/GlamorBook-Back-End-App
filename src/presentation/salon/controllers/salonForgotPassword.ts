import { NextFunction, Request, Response } from "express";
import { dependencies } from "./../../../boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateForgotPasswordToken } from "@/utilities/jwt/generateForgotPasswordToken";
import { sendResetPasswordEmail } from "@/utilities/sendResetPasswordEmail";

export const salonForgotPasswordController = (
  dependencies: ISalonDependencies
) => {
  const {
    useCases: { findSalonByEmailUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      console.log("this is my req.body of tghe salon reset data ", email);
      let roletype: any = "";

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const findSalon = await findSalonByEmailUseCase(dependencies).execute(
        email
      );
      if (!findSalon) {
        console.log("salon not fount for forgot passs ");
        return res.status(404).json({ message: "Theater not found" });
      }
      roletype = findSalon.role;
      const resetToken = generateForgotPasswordToken({ email });

      await sendResetPasswordEmail(email, resetToken, roletype);
      return res.status(200).json({ message: "Password reset email sent" });
    } catch (error: any) {
      next(error);
    }
  };
};
