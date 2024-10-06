import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { dependencies } from "./../../../boot/dependencies";
import { NextFunction, Request, Response } from "express";

export const getSalonProfileController = (dependencies: ISalonDependencies) => {
  const {
    useCases: { getSalonProfileUseCase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salonIdForPorpuse } = req.params;

      console.log("300303", salonIdForPorpuse);
      

      if (!salonIdForPorpuse){
        return res
          .status(403)
          .json({ success: false, message: "the salon id missed " });
      }
      let response = await getSalonProfileUseCase(dependencies).execute(salonIdForPorpuse);

      

      return res.status(200).json({success:true,data:response,message:"the salon data fetched from backend "});
    } catch (error: any) {
      next(error);
    }
  };
};
