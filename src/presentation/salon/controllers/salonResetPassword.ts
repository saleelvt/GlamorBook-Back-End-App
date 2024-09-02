import { decode } from "punycode";
import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { verifyForgotPasswordToken } from "@/utilities/jwt/VerifyForgotPasswordToken";
import { log } from "console";
import { NextFunction, Request, Response } from "express";
import { hashPassword } from "@/utilities/bcrypt";
import { deepEqual } from "assert";

export const salonResetPasswordController = (
  dependencies: ISalonDependencies
) => {
  const {
    useCases: { findSalonByEmailUseCase, resetSalonPasswordUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    const { password, param } = req.body.data;

    if (!param || !password) {
      return res.status(400).json({
        success: false,
        message: "Token and password are required fields",
      });
    }

    const decode = await verifyForgotPasswordToken(param);
    const email = decode.email;

    const existSalon = await findSalonByEmailUseCase(dependencies).execute(
      email
    );

    if (!existSalon) {
      return res.status(404).json({
        success: false,
        message: "salon not found ",
      });
    }

    const hashedPassword = await hashPassword(password);

    const resetPassword = await resetSalonPasswordUseCase(dependencies).execute(
      { email, password: hashedPassword }
    );

    if (resetPassword) {
      return res.status(200).json({
        success: true,
        data: existSalon,
        message: "Password updated successfully",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to update password",
      });
    }
  };
};
