import { Service } from "../../models/serviceSchema"


export const SalonAddServiceById=async (_id:string,serviceName:string,price:number,duration:number) :Promise<boolean>=>{
    try {
        const  Servise=  await Service.create({salonId:_id,serviceName,price,duration})
     return true 
        
    } catch (error) {
        console.error("Error adding service:", error);
        return false; // Return false if there's an error
      }
}