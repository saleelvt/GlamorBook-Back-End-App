import server from "@/presentation/server";
import { db } from "@/boot/db";

(async () => {
  try {
    server;
    await db()
      .then(() => console.log("data base connected succesfully "))
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
