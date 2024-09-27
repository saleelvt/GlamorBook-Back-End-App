import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";

import { NextFunction, Request, Response } from "express";

export const adminHandleBlockUnblockController = (
  dependencies: IAdminDependencies
) => {
  const {
    useCases: { adminHandleBlockUnblock },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salonId } = req.params;
      const { status } = req.body;
      let response = await adminHandleBlockUnblock(dependencies).execute(
        salonId,
        status
      );
      if (!response) {
        return res
          .status(404)
          .json({ success: false, message: "salon  not found did'nt update" });
      }
      return res.status(200).json({ success: true, data: response });
    } catch (error: any) {
      console.error("Failed to handle accept/reject salon :", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  };
};
