import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { jwtMiddleware } from "@/utilities/middlewares/verifyToken";

import { controllers } from "@/presentation/user/controllers";
import { Router } from "express";

export const routes = (dependencies: IDependencies) => {
  const { signup, verifyOtp, googleAuth, loginUser, reSendOtp, logoutUser,forgotPassword,resetPassword ,getEveryUsersStatus} =controllers(dependencies);
  const router = Router();

  router.route("/signup").post(signup);
  router.route("/verify-otp").post(verifyOtp);
  router.route("/google").post(googleAuth);
  router.route("/login").post(loginUser);
  router.route("/resend-otp").post(reSendOtp);
  router.route("/logout").delete(logoutUser);
  router.route("/forgetPassword").post(forgotPassword)
  router.route('/userResetPassword').post(resetPassword)
  router.route('/getStatus/:userId/:role').get(getEveryUsersStatus)


  
  return router;
};
