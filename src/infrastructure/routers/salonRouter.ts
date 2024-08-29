import { dependencies } from "@/boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import { salonControllers } from "@/presentation/salon/controllers";

import { Router } from "express";

export const salonRoutes = (dependencies: ISalonDependencies) => {
  const { salonSignup ,salonVerifyOtp} = salonControllers(dependencies);

  const router = Router();

  router.route("/signup").post(salonSignup);
  router.route('/verify-otp').post(salonVerifyOtp)

  return router;
};
