import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import {dependencies} from "@/boot/dependencies"
import cors from "cors";

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

// app.use("/",routes())