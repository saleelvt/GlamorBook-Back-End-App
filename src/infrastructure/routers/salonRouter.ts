import { dependencies } from "@/boot/dependencies";

import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import { salonControllers } from "@/presentation/salon/controllers";

import { Router } from "express";

export const salonRoutes = (dependencies: ISalonDependencies) => {
  const { salonSignup ,salonVerifyOtp,salonLogin,salonForgotPassword,salonResetPassword,salonLogout,salonProfile,addService,getAllServicesById,getAllUsers,deleteService,updateService} = salonControllers(dependencies);

  const router = Router();

  router.route("/signup").post(salonSignup);
  router.route('/verify-otp').post(salonVerifyOtp)
  router.route('/login').post(salonLogin)
  router.route("/forgotPassword").post(salonForgotPassword)
  router.route('/resetPassword').post(salonResetPassword)
  router.route('/logout').delete(salonLogout)
  router.route("/getSalonProfile/:salonIdForPorpuse").get(salonProfile)
  router.route("/addSalonService").post(addService)
  router.route("/getAllServices/:salonIdForPorpuse").get(getAllServicesById)
  router.route('/getAllUsers').get(getAllUsers)
  router.route("/deleteService/:serviceId").delete(deleteService)
  router.route("/updateService/:serviceId").put(updateService)

  return router;
};
