import { IDependencies } from "../interfaces/IDependencies";

export const verifyOtpUseCase=(dependecies:IDependencies)=>{
    const {repositories:{verifyOtpRepo}}=dependecies

    return {
        execute:async( email:string , otp:string[] )=>{

            try {
                return await verifyOtpRepo(email,otp)
            } catch (error:any) {
                throw new Error(error?.message)
            }

        }
    }


}