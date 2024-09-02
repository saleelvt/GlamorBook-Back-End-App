import { IDependencies } from "../interfaces/IDependencies";


export const findUserByEmailUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findByEmail },
  } = dependencies;

  return {
    execute: async (email: string) => {
      return await findByEmail(email);
    },
  };
};
