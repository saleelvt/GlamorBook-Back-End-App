import { SalonEntity } from "@/domain/salon/entities";



export interface  IAdminHandleBlockUnblockUseCase {


    execute(salonId:string,status:string):Promise<SalonEntity|null>

}