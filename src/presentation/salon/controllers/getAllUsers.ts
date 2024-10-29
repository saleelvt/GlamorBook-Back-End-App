import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { NextFunction, Request, Response } from "express";

export const getAllUsersController = (dependencies: ISalonDependencies) => {
  const {
    useCases: { getAllUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("the backend funtiongo ");
      let response = await getAllUserUseCase(dependencies).execute();

      if (response.length === 0) {
        return res
          .status(403)
          .json({ success: false, message: "userList empty " });
      }
      return res
        .status(200)
        .json({ success: true, message: "users got ", data: response });
    } catch (error) {
      next();
    }
  };
};
