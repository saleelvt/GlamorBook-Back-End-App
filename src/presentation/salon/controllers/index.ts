
import { dependencies } from "@/boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import { salonSignupController } from "./salonSignup";
import { salonVerifyOtpController } from './salonVerifyOtp';

export const salonControllers = (dependencies: ISalonDependencies) => {
  return {
    salonSignup: salonSignupController(dependencies),
    salonVerifyOtp:salonVerifyOtpController(dependencies)
  };
};
