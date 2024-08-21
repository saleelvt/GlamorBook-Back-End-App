import { IDependencies } from "@/application/user/interfaces/IDependencies";
import { dependencies } from "@/boot/dependencies";
import { controllers } from "@/presentation/user/controllers";
import { Router } from "express";

export const routes = (dependencies: IDependencies) => {
  const { signup} = controllers(dependencies);
  const router = Router();

  router.route("/signup").post(signup);

  return router 
};
