import { IAdminDependencies } from "../interfaces/IAdminDependencies";

export const adminDeleteSalonUseCase = (dependencies: IAdminDependencies) => {
  const {
    repositories: { deleteSalonById },
  } = dependencies;

  return {
    execute: async (salonId: string): Promise<boolean> => {
      if (!salonId) {
        throw new Error("Salon ID is required");
      }

      const deletedSalon = await deleteSalonById(salonId);
      if (!deletedSalon) {
        throw new Error("Salon  not found or could not be deleted");
      }

      return true;
    },
  };
};
