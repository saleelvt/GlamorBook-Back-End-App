import { dependencies } from "./../../../boot/dependencies";

import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const verifySalonOtpUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { salonVerifyOtpRepo },
  } = dependencies;

  return {
    execute: async (email: string, otp: string[]) => {
      try {
        return await salonVerifyOtpRepo(email, otp);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
