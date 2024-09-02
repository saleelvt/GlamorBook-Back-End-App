
import { SalonEntity } from "../entities";

export interface ISalonFinbyEmailUsecases{
    execute(email:string):Promise<SalonEntity|null>

}