import { AdminEntity } from "@/domain/admin/entities/adminEntity";
import { SalonEntity } from "@/domain/salon/entities";
export interface IAdminRepositories{
    adminFindByEmail:(email:string)=> Promise<AdminEntity|null>
    getAllSalons:()=> Promise<boolean|SalonEntity[]>
}