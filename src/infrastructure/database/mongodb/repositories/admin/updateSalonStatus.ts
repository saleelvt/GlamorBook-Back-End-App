import { Salon } from "../../models/salonSchema";
import { SalonEntity } from "@/domain/salon/entities";

 export const updateSalonStatus = async (
  salonId: string,
  status: string
): Promise<SalonEntity | null> => {
  try {
    const updatedsalon = await Salon.findByIdAndUpdate(
      salonId,
      { status },
      { new: true }
    );
    return updatedsalon;
  } catch (error) {
    console.error("Failed to update theater status:", error);
    throw new Error("Failed to update theater status");
  }
};
