import { IAdminDependencies } from "../interfaces/IAdminDependencies";

export const getSalonDetailsUseCase = (dependencies: IAdminDependencies) => {
  const {
    repositories: { getSalonById },
  } = dependencies;

  return {
    execute: async (salonId: string) => {
      try {
        const response = await getSalonById(salonId);
        return response;
      } catch (error: any) {
        throw new Error("failed to fetch SalonWithId in useCase");
      }
    },
  };
};
