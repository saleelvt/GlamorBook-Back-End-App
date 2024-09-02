
import { SalonEntity } from "@/domain/salon/entities";

export interface ISalonRepositories {
   salonCreate:(data: SalonEntity)=> Promise<SalonEntity | null>
   salonCheckEmail:(email: string)=>Promise<boolean>
   salonVerifyOtpRepo:(email:string,otp:string[])=> Promise<boolean>
   salonFindByEmail:(email:string)=>Promise<SalonEntity|null>
   updateSalonPassword:(data:{email:string,password:string})=>Promise<SalonEntity|null>
}
