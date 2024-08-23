import { Otp } from "../../models/otpShema";

export const verifyOtpRepo = async (email: string, otp: string[]) => {
  try {
    console.log(email, "email received for verify ");
    console.log(otp, "otp  received for verify ");

    const dbOtp = await Otp.findOne({ email });
    console.log("my db otp is ", dbOtp);

    if (dbOtp && otp.join("") === dbOtp.otp) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
