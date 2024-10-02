import { SalonEntity } from "@/domain/salon/entities";
import { Salon } from "../../models/salonSchema";

export const salonFindByEmail = async (
  email: string
): Promise<SalonEntity | null> => {
  try {
    const checkSalonEmail = await Salon.findOne({ email: email });
    
    console.log("🚀 ~ Email in database:", checkSalonEmail);
    return checkSalonEmail;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
