import server from "./presentation/server";
import { db } from "./boot/db";
import { Admin } from "./infrastructure/database/mongodb/models/adminSchema";

 export const insertAdmin = async () => {

  const sampleAdmin = {
    userName: "saleelAdmin",
    email: "admin12@gmail.com",
    password: "admin@12",
  };

  try {
    const existingAdmin = await Admin.findOne({ email: sampleAdmin.email });
    if (!existingAdmin) {
      const newAdmin = new Admin(sampleAdmin);
      await newAdmin.save();
      console.log("this is the admin now ", newAdmin);
    } else {
      console.log(" ADMIN ALLREDY EXISTED  ");
    }
  }  catch (error) {
    console.error("Failed to insert sample admin:", error);
  }
};

(async () => {
  try {
    console.log("Initializing server and database connection...");
    server;
    await db()
      .then(() => console.log("data base connected in index page finish  "))
      .catch((error: any) => {
        console.error("error while connecting mongodb", error);
        process.exit(0);
      });
  } catch (error: any) {
    console.log("Error on start up: ", error);
  } finally {
    process.on("sigint", async () => {
      console.log("server is shutting down ");
      process.exit();
    });
  }
})();

// insertAdmin()
