

 import { SalonEntity } from "@/domain/salon/entities";

 

 export interface  IGetSalonDetailsUseCase{

    execute(salonId:string):Promise<SalonEntity|null>

 }