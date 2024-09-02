import nodemailer from "nodemailer";

import { EMAIL, PASSWORD } from "@/boot/emailConfig";

const CLIENT_URL = process.env.CLIENT_URL;

export const sendResetPasswordEmail = async (
  email: string,
  resetToken: string,
  userType: string
) => {

  console.log("emai and token and userytp", email, resetToken, userType);
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "Gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  let resetLink;

  if (userType === "user") {
    console.log("my type is ", userType);

    resetLink = `${CLIENT_URL}/userResetPassword?token=${resetToken}`;
  } else if (userType === "salon") {
    console.log("my type is ", userType);
    resetLink = `${CLIENT_URL}/salonResetPassword?token=${resetToken}`;
  } else {
    throw new Error("Invalid userType provided");
  }

  const message = "Click the link below to reset your password:";

  const mailData = {
    from: "glamorbook52@gmail.com",
    to: email,
    subject: "OTP From GlamorBook Salon Booking Platform",
    html: `<p>${message}</p> <a href="${resetLink}" style="color: tomato; font-size: 18px;">Reset Password</a><p>This link <b>expires in 15 minutes</b>.</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("email successfully sented ");
    return true;
  } catch (error) {
    console.error(
      "Error occurred while sending the password reset email",
      error
    );
    return false;
  }
};
