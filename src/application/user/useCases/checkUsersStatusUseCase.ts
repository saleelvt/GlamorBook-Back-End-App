import { IDependencies } from "../interfaces/IDependencies";

export const checkUsersStatusUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { checkStatusById },
  } = dependencies;
  return {
    execute: async (userid: string, role: string) => {
      try {
        console.log("my data from use case ", userid, role);

        let data = await checkStatusById(userid, role);

        return data;
      } catch (error: any) {
        throw new Error(error.message || "user creation failed");
      }
    },
  };
};
