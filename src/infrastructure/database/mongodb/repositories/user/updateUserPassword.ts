import { User } from "../../models/userSchema";

import { UserEntity } from "@/domain/user/entities";


export const updateUserPassword = async (data: {
  email: string;
  password: string;
}): Promise<UserEntity | null> => {
  try {
    const updatedPassword = await User.findOneAndUpdate(
      { email: data.email },
      { password: data.password },
      { new: true }
    );
    if (!updatedPassword) {
      throw new Error("User password update failed");
    }

    return updatedPassword;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
