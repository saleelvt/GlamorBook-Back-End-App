import { IDependencies } from "@/application/user/interfaces/IDependencies";

import { controllers } from "@/presentation/user/controllers";
import { Router } from "express";

export const routes = (dependencies: IDependencies) => {
  const { signup, verifyOtp,googleAuth,loginUser,reSendOtp } = controllers(dependencies);
  const router = Router();

  router.route("/signup").post(signup);
  router.route("/verify-otp").post(verifyOtp);
  router.route('/google').post(googleAuth)
  router.route('/login').post(loginUser)
  router.route('/resend-otp').post(reSendOtp)



  return router;
};
