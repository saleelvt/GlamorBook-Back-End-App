

import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { UserEntity } from "@/domain/user/entities";
import { generateAccessToken } from "@/utilities/jwt/generateAccessToken";
import { generateRandomString } from "@/utilities/generateRandomString";
import { generateRefreshToken } from "@/utilities/jwt/generateRefreshToken";
import dotenv from "dotenv";
dotenv.config();

const GoogleClientId = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);

export const googleAuthController = (dependencies: IDependencies) => {
  const {
    useCases: { createUserUseCase, findUserByEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { credential } = req.body;

      const ticket = await GoogleClientId.verifyIdToken({
        idToken: credential,
        audience: process.env.VITE_GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      if (!payload || !payload.email) {
        return res.status(400).json({
          success: false,
          message:
            "Google token is invalid or does not contain an email address.",
        });
      }
      const { email, given_name, family_name, sub } = payload;

      const exist = await findUserByEmailUseCase(dependencies).execute(email);

      if (exist) {
        const accessToken = generateAccessToken({
          _id: String(exist?._id),
          email: exist?.email!,
          role: exist?.role!,
        });
        res.cookie("access_token", accessToken, {
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          data: exist,
          message: "User Google login!",
        });
      }

      const newUser: UserEntity = {
        userName: given_name,
        email: email,
        password: `${generateRandomString()}`,
        role: "user",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const result = await createUserUseCase(dependencies).execute(newUser);
      if (!result) {
        throw new Error("üser not creted its failed");
      }

      const accessToken = generateAccessToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
      })

      const refreshToken = generateRefreshToken({
        _id: String(result?._id),
        email: result?.email!,
        role: result?.role!,
      });
 
      res.cookie("access_token", accessToken, {
        httpOnly: true,
      });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
      });

      res.status(200).json({
        success: true,
        data: result,
        message: "User Google signup!",
      });
    } catch (error: any) {
      next(error);
    }
  };
};
