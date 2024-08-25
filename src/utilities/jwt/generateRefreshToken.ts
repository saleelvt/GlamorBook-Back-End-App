import  dotenv  from 'dotenv';

import  Jwt  from "jsonwebtoken";

dotenv.config()
export const generateRefreshToken =(payload:{
    _id:string;
    email:string;
    role?:string
})=>{
 const Secret=process.env.REFRESH_TOKEN_SECRET
 if(!Secret)  throw new Error("Refresh token secret is not defined!");

 try {
    return Jwt.sign(payload, Secret, { expiresIn: "30d" });
  } catch (error) {
    throw new Error("Failed to generate refresh token.");
  }

}