import { dependencies } from "./../../../boot/dependencies";

import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { sendAcceptanceEmail } from "@/utilities/email/sendAcceptanceEmail";
import { sendRejectionEmail } from "@/utilities/email/sentRejectionEmail";
import { Request, Response, NextFunction } from "express";
export const adminAcceptSalonController = (
  dependencies: IAdminDependencies
) => {
  const {
    useCases: { acceptSalonUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { salonId } = req.params;
      console.log("my salon id got for the accept ", salonId);
      const { status, comments } = req.body;
       console.log('this data for rejection ', status, "and may comment ", comments );
       
      const updatedSalon = await acceptSalonUseCase(dependencies).execute(
        salonId,
        status
      );
      if (!updatedSalon) {
        res
          .status(403)
          .json({ success: false, message: "Salon status Cannot change " });
      }

      if (status === "active") {
        const emailSend = await sendAcceptanceEmail(
          updatedSalon?.email ?? "",
          updatedSalon?.userName ?? ""
        );

        if (!emailSend) {
          console.warn("Acceptance email could not be sent");
        }
      }

      if (status == "rejected") {
        const emailSend = await sendRejectionEmail(
          updatedSalon?.email ?? "",
          updatedSalon?.userName ?? "",
          updatedSalon?.comments ?? ""
        );
        if (!emailSend) {
          console.warn("Rejection email could not be sent");
        }
      }
      return res.status(200).json({ success: true, data: updatedSalon });
    } catch (error: any) {
      console.error("Failed to handle accept/reject theater:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  };
};
