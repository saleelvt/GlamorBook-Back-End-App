
import { Salon } from "../../models/salonSchema"

export const getAllSalon= async()=>{

    
    try {
        const respoense= await Salon.find({status:"active"})
         if(respoense.length <1 || respoense==null){
            throw new Error("the  salon isw emty or the salon might be null ")
         }
         return respoense
    } catch (error:any) {
        
        throw new Error(error?.message);
    }

}