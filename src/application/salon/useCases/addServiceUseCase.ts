import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const addServiceUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { SalonAddServiceById },
  } = dependencies;

  return {
    execute: async (
      _id: string,
      serviceName: string,
      price: number,
      duration: number
    ) => {
      try {
        const response = await SalonAddServiceById(
          _id,
          serviceName,
          price,
          duration
        );
        return response;
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
