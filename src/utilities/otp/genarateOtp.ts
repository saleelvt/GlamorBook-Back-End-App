import { randomInt } from "crypto";

export const generateOtp = () => {
  while (true) {
    const value = randomInt(100000, 999999);
    if (value.toString().length === 6) {
      return value;
    }
  }
};
