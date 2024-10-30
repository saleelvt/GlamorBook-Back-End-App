import { IUpdateService } from "../entities/updateService";

export interface IUpdateServiceUseCase{
    execute:(items:IUpdateService) => Promise<any>
}