

import { comparePassword } from "@/utilities/bcrypt";
import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const loginSalonUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { salonFindByEmail },
  } = dependencies;

  return {
    execute: async (email: string, password: string) => {
      try {
        const salon = await salonFindByEmail(email);

        console.log('this is the salon ',salon);
        
        if (!salon) {
          throw new Error("Salon not Found Please Signup ");
        }

        const passwrodMatched = await comparePassword(password,salon.password);
        if(!passwrodMatched){
            throw new Error('invalid password ')
        }
        return salon
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  };
};
