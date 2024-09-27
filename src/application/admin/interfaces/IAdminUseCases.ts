import { dependencies } from './../../../boot/dependencies';

import { IAdminDependencies } from "./IAdminDependencies";
import { IAcceptSalonUseCase, ILoginAdminUseCase } from "@/domain/admin/useCases";
import { IGetSalonDetailsUseCase } from '@/domain/admin/useCases/IGetSalonDetailsUseCase';
import { IGetAllSalonsAdminUseCases } from "@/domain/admin/useCases";
import { IAdminDeleteSalon } from "@/domain/admin/useCases";


export interface IAdminUseCases {
  loginAdminUseCases: (dependencies: IAdminDependencies) => ILoginAdminUseCase;
  getAllSalonsListAdminUseCase: (dependencies: IAdminDependencies) => IGetAllSalonsAdminUseCases;
  getSalonDetailsUseCase:(dependencies:IAdminDependencies)=> IGetSalonDetailsUseCase;
  acceptSalonUseCase:(dependencies:IAdminDependencies)=>IAcceptSalonUseCase
  adminDeleteSalonUseCase:(dependencies:IAdminDependencies)=> IAdminDeleteSalon
  
}
