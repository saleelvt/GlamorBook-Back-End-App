import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { loginAdminController } from "./loginAdmin";
import { adminLogutController } from "./adminLogout";
import { getAllSalonsListAdminController } from "./salonLists";


export const adminControllers=(dependencies:IAdminDependencies)=>{
    return {

        loginAdmin:loginAdminController(dependencies),
        logoutAdmin:adminLogutController(dependencies),
        getAllSalonsListAdmin:getAllSalonsListAdminController(dependencies),

        
    }
}