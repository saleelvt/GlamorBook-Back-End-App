import { dependencies } from '@/boot/dependencies';
import { ILoginAdminUseCase } from "@/domain/admin/useCases";
 import { IAdminDependencies } from "./IAdminDependencies";

export interface IAdminUseCases {

        loginAdminUseCases:(dependencies:IAdminDependencies)=> ILoginAdminUseCase
    
}