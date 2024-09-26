import nodemailer from "nodemailer";

import { EMAIL, PASSWORD } from "@/boot/emailConfig";

export const sendAcceptanceEmail = async (email: string , userName: string) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    service: "Gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  const message = `Congratulations! Your Salon "${userName}" has been accepted. You can now login and start using our platform.`;
  const mailData = {
    from: "glamorbook52@gmail.com",
    to: email,
    subject: "Salon Accepted - Your Salon",
    html: `<p>${message}</p> <a href="http://localhost:5173/salonLogin" style="color: tomato; font-size: 18px;">Login Here</a>`,
  };
  try {
    await transporter.sendMail(mailData);
    console.log("Acceptance email sent successfully");
    return true;
  } catch (error) {
    console.error("Error occurred while sending the acceptance email", error);
    return false;
  }
};
