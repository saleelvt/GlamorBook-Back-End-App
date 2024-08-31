import { Otp } from "../../models/otpSchema";

export const salonVerifyOtpRepo = async (email: string, otp: string[]) => {
  try {
    console.log("this sis my otp and email for salon verify ", otp, email);
    const dbOtp = await Otp.findOne({ email });
    console.log(dbOtp, "database otp");
    if (dbOtp && dbOtp.otp === otp.join("")) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
