
import { UserEntity } from "@/domain/user/entities";
import { User } from "../../models/userSchema"

export const getAllUsers= async():Promise<UserEntity[]>=>{
    try {
        
        let response= await User.find()

        return response
    } catch (error: any) {
        throw new Error(error?.message);
      }
}