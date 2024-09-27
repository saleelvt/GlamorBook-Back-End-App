import { AdminEntity } from "@/domain/admin/entities/adminEntity";
import { SalonEntity } from "@/domain/salon/entities";
export interface IAdminRepositories{
    adminFindByEmail:(email:string)=> Promise<AdminEntity|null>
    getAllSalons:()=> Promise<boolean|SalonEntity[]>
    getSalonById:(salonId:string)=> Promise<SalonEntity|null>
    updateSalonStatus:(salonId:string,status:string)=> Promise<SalonEntity | null>
    deleteSalonById:(salonId:string)=> Promise <SalonEntity | null>
}