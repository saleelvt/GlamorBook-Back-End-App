import { dependencies } from "./../../../boot/dependencies";

import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { generateForgotPasswordToken } from "@/utilities/jwt/generateForgotPasswordToken";
import { sendResetPasswordEmail } from "@/utilities/sendResetPasswordEmail";
import { Request, Response, NextFunction } from "express";

export const forgotPasswordController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      console.log("thsi is my emal for forgot password ", email);
      let roleType: any = "";

      if (!email) return res.status(400).json({ message: "Email is required" });

      const user = await findUserByEmailUseCase(dependencies).execute(email);
      roleType = user?.role;

      if (!user) return res.status(404).json({ message: "User not found" });

      const resetToken = generateForgotPasswordToken({ email });

      await sendResetPasswordEmail(email, resetToken, roleType);

      console.log("mail successuy sended for the forgot user ");
      return res.status(200).json({ message: "Password reset email sent" });
    } catch (error: any) {
      next(error);
    }
  };
};
