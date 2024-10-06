import { ISalonDependencies } from "../interfaces/ISalonDependencies";
import { dependencies } from "../../../boot/dependencies";

export const getSalonProfileUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { salonProfileById },
  } = dependencies;

  return {
    execute: async (id: string) => {
      try {
        console.log("my id for fetch profile ", id);
        let response = await salonProfileById(id);
        return response;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
