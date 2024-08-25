import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const db = async () => {
  try {
    const mongoosURL:any = process.env.mongoosURL
    console.log("my url ", mongoosURL);
 
    await mongoose.connect(mongoosURL.trim())
    console.log('after connect ');
    
  } catch (error) {
    console.error("data basejj cnnection failed");
    console.error(error);
    process.exit(1);
  }
};

