

import { AdminEntity } from "../entities/adminEntity";

export interface ILoginAdminUseCase{

    execute(email:string,password:string):Promise<AdminEntity>
}