
import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const checkSalonEmailUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { salonCheckEmail },
  } = dependencies;

  return {
    execute: async (email: string) => {
      try {
        return await salonCheckEmail(email);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
