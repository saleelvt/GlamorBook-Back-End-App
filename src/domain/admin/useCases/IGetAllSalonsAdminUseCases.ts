

import { SalonEntity } from "@/domain/salon/entities";

export  interface IGetAllSalonsAdminUseCases{

    execute():Promise<SalonEntity[]|boolean>
}