import { SalonAddServiceById } from './../../../infrastructure/database/mongodb/repositories/salon/salonAddServiceById';

import { SalonEntity } from "@/domain/salon/entities";

export interface ISalonRepositories {
   salonCreate:(data: SalonEntity)=> Promise<SalonEntity | null>
   salonCheckEmail:(email: string)=>Promise<boolean>
   salonVerifyOtpRepo:(email:string,otp:string[])=> Promise<boolean>
   salonFindByEmail:(email:string)=>Promise<SalonEntity|null>
   updateSalonPassword:(data:{email:string,password:string})=>Promise<SalonEntity|null>
   salonProfileById :(id:string) => Promise <SalonEntity|null> 
   SalonAddServiceById:(_id:string,serviceName:string,price:number,duration:number) => Promise<boolean>
   getServicesById:(salonId:string) => Promise<any>
}
