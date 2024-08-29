

import { SalonEntity } from "@/domain/salon/entities";
import { ISalonDependencies } from "../interfaces/ISalonDependencies";

export const createSalonUseCase = (dependencies: ISalonDependencies) => {
  const {
    repositories: { salonCreate },
  } = dependencies;
  return {
    execute: async (data: SalonEntity) => {
      try {
        return await salonCreate(data);
      } catch (error: any) {
        throw new Error(error.message || "salon creation failed");
      }
    },
  };
};
