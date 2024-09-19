import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";

import { Request, Response, NextFunction } from "express";

export const getAllSalonsListAdminController = (
  dependencies: IAdminDependencies
) => {
  const {
    useCases: { getAllSalonsListAdminUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const AllSalons = await getAllSalonsListAdminUseCase(
        dependencies
      ).execute();


      res.status(200)
        .json({
          success: true,
          data: AllSalons,
          message: "Got the all salons",
        });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: (error as Error)?.message,
      });
    }
  };
};
