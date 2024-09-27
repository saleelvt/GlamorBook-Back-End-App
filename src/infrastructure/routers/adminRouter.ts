import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { adminControllers } from "@/presentation/admin/controllers";
import { Router } from "express";
export const adminRoutes = (dependencies: IAdminDependencies) => {
  const { loginAdmin, logoutAdmin ,getAllSalonsListAdmin,getSalonDetails,adminAcceptSalon,deleteSalonById } = adminControllers(dependencies);

  const router = Router();

  router.route("/login").post(loginAdmin);
  router.route('/logout').delete(logoutAdmin)
  


  // get lists 
  router.route('/getSalons').get(getAllSalonsListAdmin)
  router.route('/getSalonDetails/:salonId').get(getSalonDetails)


  // patchs 
  router.route("/:salonId/acceptSalon").patch(adminAcceptSalon)
  // router.route('/:id/status').patch(handleBlockUnblock)


  // deletes
  router.route("/:salonId/deleteSalon").delete(deleteSalonById)

  return router;

};
