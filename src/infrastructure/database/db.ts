const mongose = require("mongose");
import dotenv from "dotenv";
dotenv.config();
export const db = async () => {
  try {
    const mongoUrl = process.env.mongoURL;
    console.log("my url ", mongoUrl);

    if (!mongoUrl) {
      throw new Error(" Mongo_url environment variable is not dfined");
    }
    await mongose.connect(mongoUrl.trim());
    console.log("data base connected successfully");
  } catch (error) {
    console.error("data base cnnection failed");
    console.error((error as Error).message);
    process.exit(1);
  }
};

