import { SalonEntity } from "../entities";


export interface IGetSalonProfileUseCase {

    execute(salonId:string) :Promise <SalonEntity|null> 
}