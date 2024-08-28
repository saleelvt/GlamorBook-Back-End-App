import { loginAdminUseCases } from "./../../../application/admin/useCases/loginAdminUseCase";

import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateRefreshToken } from "@/utilities/jwt/generateRefreshToken";
import { NextFunction, Request, Response } from "express";

export const loginAdminController = (dependencies: IAdminDependencies) => {
  console.log("dfd_______________________________________");
  console.log("dfd_______________________________________");

  const {
    useCases: { loginAdminUseCases },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("da mach a");

      const { email, password } = req.body;
      console.log("admin controller reached man ", req.body);

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" }
          );
      }

      const admin = await loginAdminUseCases(dependencies).execute(
        email,
        password
      );

      

      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Ensure admin properties exist before generating tokens
      const adminId = admin._id?.toString();
      const adminEmail = admin.email;
      const adminRole = admin.role;

      if (!adminId || !adminEmail || !adminRole) {
        return res
          .status(500)
          .json({ message: "Admin information is incomplete" });
      }

      const accessToken = generateAccessToken({
        _id: adminId,
        email: adminEmail,
        role: adminRole,
      });

      const refreshToken = generateRefreshToken({
        _id: adminId,
        email: adminEmail,
        role: adminRole,
      });

      // Set cookies with tokens
      res.cookie("access_token", accessToken, {
        httpOnly: true,
      });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
      });

      return res.status(200).json({
        message: "Login successful",
        data: admin,
      });
    } catch (error: any) {
      console.error("Login error:", error); // Log error for debugging
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  };
};
