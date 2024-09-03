import { dependencies } from "./../../../boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { NextFunction, Request, Response } from "express";
export const salonLogoutController = (dependencies: ISalonDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {

        console.log('lgout van salon');
        
      res.cookie("access_token", "", {
        maxAge: 1,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      res.cookie("refresh_token", "", {
        maxAge: 1,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      res.status(204).json({});
    } catch (error) {
      next(error);
    }
  };
};
