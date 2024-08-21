import { IDependencies } from "@/application/user/interfaces/IDependencies";

import { Request, Response, NextFunction } from "express";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { checkUserEmailUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("my req,body 1", req.body);

    const userCredentials = req.body;

    if (!userCredentials || !userCredentials.email) {
      return res.status(400).json({
        success: false,
        message: "Invalid user credentials",
      });
    }

    try {
      const userExist = await checkUserEmailUseCase(dependencies).execute(
        userCredentials.email
      );
      if (userExist)
        return res.status(409).send({ error: "E-mail already signed " });
    } catch (error) {}
  };
};

