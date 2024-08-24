import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const db = async () => {
  try {
    const mongoURL:any = process.env.mongoURL;
    console.log("my url ", mongoURL);
    // if (!mongoUrl) {
    //   throw new Error(" Mongo_url environment variable is not dfined");
    // } 
    // await mongose.connect(mongoUrl.trim());
    console.log("data base connected successfully in the boot db page ");
    await mongoose.connect(mongoURL.trim())
  } catch (error) {
    console.error("data basejj cnnection failed");
    console.error(error);
    process.exit(1);
  }
};

