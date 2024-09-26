import  nodemailer  from 'nodemailer';

import { EMAIL,PASSWORD } from '@/boot/emailConfig';




export const sendRejectionEmail = async (email:string,userName:string,comments:string)=>{

    const transporter = nodemailer.createTransport({
        port: 465,
        service: "Gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
        secure: true,
      });

      const message = `We regret to inform you that your Salon "${userName}" has been rejected for the following reason: ${comments}`;
      const mailData = {
        from: "glamorbook52@gmail.com",
        to: email,
        subject: "Glamor Book  Rejected -  your Salon",
        html: `<p>${message}</p>`,
      };
      try {
         await transporter.sendMail(mailData)
         console.log("Rejection  email sent successfully");
         return true 
      } catch (error) {
        console.error("Error occurred while sending the acceptance email", error);
        return false;
      }


}