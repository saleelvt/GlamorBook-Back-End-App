import { SalonEntity } from "@/domain/salon/entities";
import { Salon } from "../../models/salonSchema";

export const getSalonById = async (salonId: string):Promise <SalonEntity|null> => {
  try {
    const mySalonDetails = await Salon.findById(salonId);
    if (!mySalonDetails) {
      throw new Error("Salon not Fount");
    }

    return mySalonDetails.toObject() as SalonEntity;
  } catch (error: any) {
    console.error("Failed to get theater details:", error);
    throw new Error("Failed to get theater details");
  }
};
