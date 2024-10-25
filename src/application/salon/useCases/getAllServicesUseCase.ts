import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const getAllServicesUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { getServicesById },
  } = dependencies;

  return {
    execute: async (salonId: string) => {
      try {
        const response = getServicesById(salonId);
        return response;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
