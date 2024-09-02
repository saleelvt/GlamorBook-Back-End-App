import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const resetSalonPasswordUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { updateSalonPassword },
  } = dependencies;

  return {
    execute: async (data: { email: string; password: string }) => {
      return await updateSalonPassword(data);
    },
  };
};
