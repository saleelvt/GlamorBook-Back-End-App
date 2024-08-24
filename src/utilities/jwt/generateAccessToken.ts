import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateAccessToken = (payload: {
  _id: string;
  email: string;
  role: string;
}) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Access Token secret is not defined!");
  }
  const { _id, email, role } = payload;
  try {
    return Jwt.sign({ _id, email, role }, secret, { expiresIn: "24h" });
  } catch (error: any) {
    throw new Error("Failed to generate access token.");
  }
};
