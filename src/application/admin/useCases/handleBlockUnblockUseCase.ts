import { IAdminDependencies } from "../interfaces/IAdminDependencies";

export const adminHandleBlockUnblock = (dependencies: IAdminDependencies) => {
  const {
    repositories: { updateSalonStatus },
  } = dependencies;

  return {
    execute: async (salonId: string, status: string) => {
      try {
        let data = await updateSalonStatus(salonId, status);
        console.log(
          " using one funtion for status change  pending to reject and block to active or active to block ",
          salonId,
          "this is the id using for status change which is  ",
          status
        );

        return data;
      } catch (error: any) {
        console.error("Failed to handle block/unblock:", error);
        throw new Error("Failed to handle block/unblock");
      }
    },
  };
};
