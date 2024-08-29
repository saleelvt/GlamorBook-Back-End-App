import { Admin } from "../../models/adminSchema";

import { AdminEntity } from "@/domain/admin/entities/adminEntity";

export const adminFindByEmail = async (
  email: string
): Promise<AdminEntity | null> => {
  console.log("🚀 ~ AdminEmail to find:", email);
  try {
    const existingAdmin = await Admin.findOne({
      email: email,
    });
    console.log("🚀 ~ AdminEmail in database:", existingAdmin);
    return existingAdmin;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
