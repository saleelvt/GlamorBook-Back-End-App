import { IAdminDependencies } from "../interfaces/IAdminDependencies";

export const acceptSalonUseCase = (dependencies: IAdminDependencies) => {
  const {
    repositories: { updateSalonStatus },
  } = dependencies;

  return {
    execute: async (salonId: string, status: string) => {
      try {
        const updatedStatus = await updateSalonStatus(salonId, status)
        return updatedStatus;
      } catch (error: any) {
        console.error("Failed to handle block/unblock:", error);
        throw new Error("Failed to handle block/unblock");
      }
    },
  };
};
