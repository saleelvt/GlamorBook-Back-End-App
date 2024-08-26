import { IAdminRepositories } from "./IAdminRepositories";
import { IAdminUseCases } from "./IAdminUseCases";

export interface IAdminDependencies{

    repositories:IAdminRepositories,
    useCases:IAdminUseCases

}