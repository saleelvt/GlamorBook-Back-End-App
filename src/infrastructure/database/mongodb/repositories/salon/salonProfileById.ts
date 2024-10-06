
import { SalonEntity } from "@/domain/salon/entities";

import { Salon } from "../../models/salonSchema";

export const salonProfileById= async(id:string):Promise <SalonEntity|null> =>{

    try {
    let response = await Salon.findById(id)
    return response
        
    } catch (error: any) {
        throw new Error(error?.message);
      }

}