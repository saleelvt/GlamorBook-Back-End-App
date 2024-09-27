import { Salon } from "../../models/salonSchema";
import { SalonEntity } from "@/domain/salon/entities";

export const deleteSalonById = async (
  id: string
): Promise<SalonEntity | null> => {
  try {
    const deleteSalon = await Salon.findByIdAndDelete(id);

    if (!deleteSalon) {
      throw new Error("salon not fount ");
    }
    return deleteSalon.toObject() as SalonEntity;
  } catch (error) {
    console.error("Error deleting theater movieبي:", error);
    return null;
  }
};
