import { compare } from "bcrypt";

export const comparePassword = async (
  original: string,
  encrypted: string
): Promise<boolean> => {
  try {
    return await compare(original, encrypted);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Password comparison faild ..."
    );
  }
};
