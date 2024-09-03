import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { adminControllers } from "@/presentation/admin/controllers";
import { Router } from "express";
export const adminRoutes = (dependencies: IAdminDependencies) => {
  const { loginAdmin, logoutAdmin } = adminControllers(dependencies);

  const router = Router();

  router.route("/login").post(loginAdmin);
  router.route('/logout').delete(logoutAdmin)

  return router;
};
