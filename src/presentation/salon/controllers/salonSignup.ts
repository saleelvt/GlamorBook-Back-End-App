import { dependencies } from "@/boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { NextFunction, Request, Response } from "express";

export const salonSignupController = (dependencies: ISalonDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const salonCredentials = req.body;
    console.log("in side of the signup of salon and details", salonCredentials);
  };
};
