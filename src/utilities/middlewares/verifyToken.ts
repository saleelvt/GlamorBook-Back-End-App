import jwt from "jsonwebtoken";
import { generateAccessToken } from "../jwt/generateAccessToken";
import { Request, Response, NextFunction } from "express";



interface UserPayload {
    _id: string;
    email: string;
    role: string;
  }


  declare global {
    namespace Express {
      interface Request {
        user?: UserPayload;
      }
    }
  }


  export const jwtMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> =>{
    try {
        console.log('my request ', req);

        const {refresh_token,access_token}=req.cookies
        
        if (!access_token && !refresh_token) {
            return next();
          }
      
          let user: UserPayload | null = null;

          if (access_token) {
            try {
              user = jwt.verify(
                access_token,
                process.env.JWT_SECRET!
              ) as UserPayload;
              
            } catch (error) {
              if (
                error instanceof jwt.TokenExpiredError ||
                error instanceof jwt.JsonWebTokenError
              ) {
                console.warn("Access token error:", error);
              } else {
                throw error;
              }
            }
          }
          if (!user && refresh_token) {
            try {
              user = jwt.verify(
                refresh_token,
                process.env.REFRESH_TOKEN_SECRET!
              ) as UserPayload;
              if (user) {
                const newAccessToken = generateAccessToken(user);
                res.cookie("access_token", newAccessToken, {
                  httpOnly: true,
                });
              }

            } catch (error) {
              if (
                error instanceof jwt.TokenExpiredError ||
                error instanceof jwt.JsonWebTokenError
              ) {
                console.warn("Refresh token error:", error);
              } else {
                throw error;
              }
            }
          }
        
    req.user = user || undefined;
    next();
  } catch (error) {
    console.error("Error in JWT middleware:", error);
    next(error);
  }
};