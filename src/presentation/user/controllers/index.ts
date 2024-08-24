

import { IDependencies } from "@/application/user/interfaces/IDependencies";

import { signupController } from "./signup";
import { verifyOtpController } from "./verifyOtp";
import {googleAuthController} from "./googleAuth"
import { loginUserController } from "./loginUser";
import {resendOtpController} from "./reSendOtp"


export const controllers=(dependencies:IDependencies)=>{

    return{
        signup:signupController(dependencies),
        verifyOtp:verifyOtpController(dependencies),
        googleAuth:googleAuthController(dependencies),
        loginUser:loginUserController(dependencies),
        reSendOtp:resendOtpController(dependencies)
    }

}