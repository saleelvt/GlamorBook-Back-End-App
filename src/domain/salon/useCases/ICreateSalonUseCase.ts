
import { SalonEntity } from "../entities";

export interface ICreateSalonUseCase {

    execute(data:SalonEntity):Promise<SalonEntity|null>
    
}