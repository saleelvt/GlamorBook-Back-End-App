
 import { SalonEntity } from "@/domain/salon/entities"

export interface IGetAllSalonUseCase{
    execute() :Promise<SalonEntity[]|null>


}