
import { SalonEntity } from "@/domain/salon/entities";
import { IUpdateService } from "@/domain/salon/entities/updateService";

export interface ISalonRepositories {
   salonCreate:(data: SalonEntity)=> Promise<SalonEntity | null>
   salonCheckEmail:(email: string)=>Promise<boolean>
   salonVerifyOtpRepo:(email:string,otp:string[])=> Promise<boolean>
   salonFindByEmail:(email:string)=>Promise<SalonEntity|null>
   updateSalonPassword:(data:{email:string,password:string})=>Promise<SalonEntity|null>
   salonProfileById :(id:string) => Promise <SalonEntity|null> 
   SalonAddServiceById:(_id:string,serviceName:string,price:number,duration:number) => Promise<boolean>
   getServicesById:(salonId:string) => Promise<any>
   getAllUsers:()=> Promise<any>
   updateServiceById:(obj:IUpdateService)=>Promise<any>
}
