import { SalonEntity } from "@/domain/salon/entities";
import { Salon } from "../../models/salonSchema";

export const getAllSalons = async (): Promise<SalonEntity[] | false> => {
  try {
    const allSalons = await Salon.find({}, { password: 0 });

    if (!allSalons) {
      return false;
    }
    return allSalons;
  } catch (error: any) {
    throw new Error(error);
  }
};
