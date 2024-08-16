import { UserEntity } from "@/domain/user/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { create },
  } = dependencies;

  return {
    execute: async (data: UserEntity) => {
      try {
        return await create(data);
      } catch (error: any) {
        throw new Error(error.message || "user creation failed");
      }
    },
  };
};
