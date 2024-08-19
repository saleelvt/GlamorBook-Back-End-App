import { IDependencies } from "@/application/user/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const signupController = (dependencies: IDependencies) => {
//   const {
//       useCases:{}
//   }

  console.log("signup controll reached ");

  return async (req: Request, res: Response, next: NextFunction) => {
    const userCredentials = req.body;
    console.log("data userdata is controller ");
  };
};
