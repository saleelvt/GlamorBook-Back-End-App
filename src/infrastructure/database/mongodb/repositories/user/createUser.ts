import { UserEntity } from "@/domain/user/entities";
import { User } from "../../models/userSchema";

export const create = async (data: UserEntity): Promise<UserEntity | null> => {
  try {
    console.log("dats inside the repository create", data);
    const newUser = await User.create(data);
    console.log("data after creating inside the repository create", newUser);
    return newUser;
  } catch (error) {

    throw new Error((error as Error).message);
    
  }
};
