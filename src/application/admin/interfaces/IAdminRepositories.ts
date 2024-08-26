import { AdminEntity } from "@/domain/admin/entities/adminEntity";
export interface IAdminRepositories{
    adminFindByEmail:(email:string)=> Promise<AdminEntity|null>
}