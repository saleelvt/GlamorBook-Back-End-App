import { comparePassword } from "@/utilities/bcrypt";
import { IDependencies } from "../interfaces/IDependencies";

export const loginUserUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { findByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        const user = await findByEmail(email);

        if (!user) {
          throw new Error("User not found");
        }
        if (user.status === "blocked") {
          throw new Error("Sorry, Your Account is Blocked");
        }
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return user;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
