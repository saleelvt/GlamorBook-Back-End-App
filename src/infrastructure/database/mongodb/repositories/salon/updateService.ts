import { IUpdateService } from "@/domain/salon/entities/updateService";
import { Service } from "../../models/serviceSchema";



export const updateServiceById = async(data:IUpdateService) : Promise<any>=> {
    try {
        const updateData  = {
            serviceName:data.serviceName,
            price:data.price,
            duration:data.duration
        };
        await Service.findByIdAndUpdate(data._id,updateData,{new:true})
 
        return true 
    } catch (error: any) {
        throw new Error(error?.message);
      }
}