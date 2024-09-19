import { IAdminDependencies } from "./IAdminDependencies";

import { ILoginAdminUseCase } from "@/domain/admin/useCases";

import { IGetAllSalonsAdminUseCases } from "@/domain/admin/useCases";

export interface IAdminUseCases {
  loginAdminUseCases: (dependencies: IAdminDependencies) => ILoginAdminUseCase;
  getAllSalonsListAdminUseCase: (
    dependencies: IAdminDependencies
  ) => IGetAllSalonsAdminUseCases;
}
