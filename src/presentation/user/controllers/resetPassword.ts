import { updateUserPasswordUseCase } from "./../../../application/user/useCases/updateUserPasswordUseCase";
import { hashPassword } from "./../../../utilities/bcrypt/hashPassword";

import { NextFunction, Request, Response } from "express";

import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { verifyForgotPasswordToken } from "@/utilities/jwt/VerifyForgotPasswordToken";
import { findUserByEmailUseCase } from "@/application/user/useCases";

export const resetPasswordController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { password, param } = req.body.data;
      console.log("tis si my data ", password, param);

      if (!password || !param) {
        return res.status(400).json({
          success: false,
          message: "Token and password are required fields",
        });
      }

      const decoded = await verifyForgotPasswordToken(param);
      const email = decoded.email;

      console.log("🚀 Email with token", email);

      const userExist = await findUserByEmailUseCase(dependencies).execute(
        email
      );
      console.log("🚀 Email given fo reset aaaa password:", userExist);

      if (!userExist) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const hashedPassword = await hashPassword(password);

      const updatePassword = await updateUserPasswordUseCase(
        dependencies
      ).execute({ email, password: hashedPassword });
      console.log(
        "🚀 ~ file: updatePassword.ts ~ updatePassword:",
        updatePassword
      );
      if (updatePassword) {
        return res.status(200).json({
          success: true,
          data: userExist,
          message: "Password updated successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Failed to update password",
        });
      }
    } catch (error: any) {
      console.error("Error updating password:", error);
      return res.status(500).json({
        success: false,
        message: "Error updating password",
      });
    }
  };
};
