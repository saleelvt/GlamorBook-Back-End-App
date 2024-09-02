import { SalonEntity } from "@/domain/salon/entities";
import { Salon } from "../../models/salonSchema";

export const updateSalonPassword = async (data: {
  email: string;
  password: string;
}): Promise<SalonEntity | null> => {
  try {
    const updatedPassword = await Salon.findOneAndUpdate(
      { email: data.email },
      { password: data.password },
      { new: true }
    );
    
    if (!updatedPassword) {
      throw new Error("Theater password update failed");
    }
    return updatedPassword;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
