import { NextFunction } from "express";
import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { Request, Response } from "express";

export const adminDeleteSalonController = (
  dependencies: IAdminDependencies
) => {
  const {
    useCases: { adminDeleteSalonUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salonId } = req.params;

      const data = await adminDeleteSalonUseCase(dependencies).execute(salonId);

      // if(!data){
      //     res.status(403).json({success:false,message: "salon not deleted "})

      // }

      return res
        .status(200)
        .json({ success: true, message: "Movie deleted successfully" });
    } catch (error: any) {
      console.error("Delete Movie error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  };
};
