import { Salon } from "../../models/salonSchema";

export const salonCheckEmail = async (email: string) =>{
  try {
    const SalonExist = await Salon.findOne({ email });
    return SalonExist ? true : false;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};


