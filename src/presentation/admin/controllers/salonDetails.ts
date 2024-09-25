
import { NextFunction, Request, Response } from "express";
import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";

export const getSalonDetailsController = (dependencies: IAdminDependencies) => {
  const {
    useCases: { getSalonDetailsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salonId } = req.params;
      console.log(salonId, "it is my salon it for slaon details ");

      const salonDetails = await getSalonDetailsUseCase(dependencies).execute(
        salonId
      );

      console.log(
        "this is my salonDetails after fetch from back end ",
        salonDetails
      );

      if (!salonDetails) {
        return res
          .status(404)
          .json({ success: false, message: "salon not found " });
      }

      res.status(200).json({ success: true, data: salonDetails });
    } catch (error: any) {
      console.error("Failed to get theater details:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  };
};


