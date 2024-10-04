import { Salon } from "../../models/salonSchema";
import { User } from "../../models/userSchema";

export const checkStatusById = async (id: string, role: string) => {
  try {
    if (role === undefined || role === null)
      throw new Error(
        "User role Undifined or null status not fetched in repository  "
      );
    if (role === "user") {
      let statusNow = await User.findById(id);
        return statusNow?.status
    }
    if(role==="salon"){
        let statusNow= await Salon.findById(id)
        
        return statusNow?.status
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
