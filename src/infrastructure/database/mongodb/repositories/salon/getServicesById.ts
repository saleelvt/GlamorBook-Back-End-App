
import { Service } from "../../models/serviceSchema"
export const getServicesById = async (salonId:string):Promise<any>=>{
    try {
        let data= await Service.find({salonId})
        return data 
    } catch (error: any) {
        throw new Error(error?.message);
      }
}