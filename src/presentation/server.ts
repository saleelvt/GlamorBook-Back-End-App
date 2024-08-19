import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
// import { routes } from "@/infrastructure/routers";
import cookieParser from "cookie-parser";

import cors from "cors";
import { dependencies } from "@/boot/dependencies";
dotenv.config();

const app: Application = express();
const PROT: number = Number(process.env.PORT) || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigin = [process.env.CLIENT_URL!];
const clientId = process.env.CLIENT_URL;
console.log(`Client URL: ${clientId}`);

const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// app.use('/',routes(dependencies))

// app.use("/",routes(dependencies))
// app.get("/", (req, res) => {
//   res.send("saleel is a good boy ");
// });

app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not Found " });
});

app.listen(PROT, () => {
  console.log(`mongodb connected successfully on this ${PROT}`);
});

// cosnt x ="saleel data its coming "
export default app;
