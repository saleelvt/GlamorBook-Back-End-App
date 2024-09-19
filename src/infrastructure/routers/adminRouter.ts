import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { adminControllers } from "@/presentation/admin/controllers";
import { Router } from "express";
export const adminRoutes = (dependencies: IAdminDependencies) => {
  const { loginAdmin, logoutAdmin ,getAllSalonsListAdmin } = adminControllers(dependencies);

  const router = Router();

  router.route("/login").post(loginAdmin);
  router.route('/logout').delete(logoutAdmin)



  


  // get lists 
  router.route('/getSalons').get(getAllSalonsListAdmin)


  // patchs 
  // router.route('/:id/status').patch(handleBlockUnblock)

  return router;

};
