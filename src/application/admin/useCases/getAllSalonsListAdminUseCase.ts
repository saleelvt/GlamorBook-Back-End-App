
import { IAdminDependencies } from "../interfaces/IAdminDependencies";

export const getAllSalonsListAdminUseCase = (dependencies: IAdminDependencies) => {
  const {
    repositories: { getAllSalons },
  } = dependencies;

  return {
    execute: async () => {
      return await getAllSalons();
    },
  };
};
