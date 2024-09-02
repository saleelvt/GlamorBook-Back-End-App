import { IDependencies } from "@/application/user/interfaces/IDependencies";

import { signupController } from "./signup";
import { verifyOtpController } from "./verifyOtp";
import { googleAuthController } from "./googleAuth";
import { loginUserController } from "./loginUser";
import { resendOtpController } from "./reSendOtp";
import { logoutController } from "./logoutUser";
import { forgotPasswordController } from "./forgotPassword";
import { resetPasswordController } from "./resetPassword";

export const controllers = (dependencies: IDependencies) => {
  return {
    signup: signupController(dependencies),
    verifyOtp: verifyOtpController(dependencies),
    googleAuth: googleAuthController(dependencies),
    loginUser: loginUserController(dependencies),
    reSendOtp: resendOtpController(dependencies),
    logoutUser: logoutController(dependencies),
    forgotPassword: forgotPasswordController(dependencies),
    resetPassword: resetPasswordController(dependencies)
  };
};
