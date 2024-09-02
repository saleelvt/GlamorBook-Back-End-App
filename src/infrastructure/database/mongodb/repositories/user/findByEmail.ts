import { UserEntity } from "@/domain/user/entities";
import { User } from "../../models/userSchema";

export const findByEmail=async (email:string):Promise<UserEntity|null>=>{

    console.log("🚀 ~ findByEmail:", email);
    try {
        const esistingUser=await User.findOne({
            email:email
        })

        console.log("🚀 ~ Email in database:", esistingUser);

        return esistingUser;

    } catch (error:any) {
        
        throw new Error(error?.message);
    }

}