import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEverySalonController = (dependencies: IDependencies) => {
  const {
    useCases: { getAllSalonUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getAllSalonUseCase(dependencies).execute();

      if (!response) {
        return res
          .status(403)
          .json({ success: false, message: "the salon is not available " });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: "salon got the data will work ",
          data: response,
        });
    } catch (error: any) {
      next(error);
    }
  };
};
