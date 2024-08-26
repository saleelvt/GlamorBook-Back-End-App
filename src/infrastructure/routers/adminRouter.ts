import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { adminControllers } from "@/presentation/admin/controllers";
import { Router } from "express";
export const adminRoutes = (dependencies: IAdminDependencies) => {
  const { loginAdmin } = adminControllers(dependencies);

  const router = Router();

  router.route("/login").post(loginAdmin);
 
  return router;
};
