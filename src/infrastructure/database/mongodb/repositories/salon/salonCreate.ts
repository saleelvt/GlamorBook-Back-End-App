import { SalonEntity } from "@/domain/salon/entities";
import { Salon } from "../../models/salonSchema";

export const salonCreate = async (
  data: SalonEntity
): Promise<SalonEntity | null> => {
  try {
    console.log("Data inside the salon repository create:", data);
    const newSalon = await Salon.create(data);
    console.log("my salon ", newSalon);
    return newSalon;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
