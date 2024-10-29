import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const getAllUserUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { getAllUsers },
  } = dependencies;
  return {
    execute: async () => {
      try {
        let a = await getAllUsers();
        return a;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
