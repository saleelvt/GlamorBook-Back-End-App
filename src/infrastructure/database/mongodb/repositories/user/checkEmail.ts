import { User } from "../../models/userSchema";
export const checkEmail=async(email:string)=>{
    try {
        const userExist=await User.findOne({email})
        console.log('email cheking ');
        
        return userExist?true:false
    } catch (error:any) {

        throw new Error(error.message)
        
    }
}