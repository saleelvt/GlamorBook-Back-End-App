


import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import { salonSignupController } from "./salonSignup";
import { salonVerifyOtpController } from './salonVerifyOtp';
import { salonLoginController } from "./salonLogin";
import { salonForgotPasswordController } from "./salonForgotPassword";
import { salonResetPasswordController } from "./salonResetPassword";
import { salonLogoutController } from "./salonLogout";
import { getSalonProfileController } from "./salonProfile";

export const salonControllers = (dependencies: ISalonDependencies) => {
  return {
    salonSignup: salonSignupController(dependencies),
    salonVerifyOtp:salonVerifyOtpController(dependencies),
    salonLogin:salonLoginController(dependencies),
    salonForgotPassword:salonForgotPasswordController(dependencies),
    salonResetPassword:salonResetPasswordController(dependencies),
    salonLogout:salonLogoutController(dependencies),
    salonProfile:getSalonProfileController(dependencies)
  };
};
