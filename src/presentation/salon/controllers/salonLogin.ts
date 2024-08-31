import { dependencies } from "./../../../boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateRefreshToken } from "@/utilities/jwt/generateRefreshToken";

import { NextFunction, Request, Response } from "express";

export const salonLoginController = (dependencies: ISalonDependencies) => {

    console.log("salon login controller reached ");
    
  const {
    useCases: { loginSalonUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      console.log("my email and pass for login ", email, password);

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and Password are Required" });
      }

      

      const salon = await loginSalonUseCase(dependencies).execute(
        email,
        password
      );



      if (salon?.status !== "active") {
        return res.status(403).json({ message: "You are not approved yet" });
      }
      if (!salon) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // add the id email role existing and pass tot cookie and frond ed

      const salonId = salon._id?.toString();
      const salonEmail = salon.email;
      const salonRole = salon.role;

      if (!salonId || !salonEmail || !salonRole) {
        return res
          .status(500)
          .json({ message: "salon  Information incomplete " });
      }

      const accessToken = generateAccessToken({
        _id: salonId,
        email: salonEmail,
        role: salonRole,
      });

      const refreshToken = generateRefreshToken({
        _id: salonId,
        email: salonEmail,
        role: salonRole,
      });

      res.cookie("access_token", accessToken, {
        httpOnly: true,
      });
      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
      });
      return res.status(200).json({
        success: true,
        message: "Solon login Successfully completed",
        data: salon,
      });
    } catch (error: any) {
      console.error("Login error:", error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error" });
    }
  };
};
