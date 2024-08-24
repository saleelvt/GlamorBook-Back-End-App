import { genSalt, hash } from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  } catch (error: any) {
    throw new Error(error?.message || "Password hashing faild ");
  }
};
