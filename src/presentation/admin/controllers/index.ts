import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import { loginAdminController } from "./loginAdmin";
import { adminLogutController } from "./adminLogout";


export const adminControllers=(dependencies:IAdminDependencies)=>{
    return {

        loginAdmin:loginAdminController(dependencies),
        logoutAdmin:adminLogutController(dependencies)
        
    }
}