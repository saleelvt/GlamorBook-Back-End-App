import express, { Application, Request, Response } from "express";

import dotenv from "dotenv";
import { adminRoutes } from "./../infrastructure/routers";
import { routes, salonRoutes } from "@/infrastructure/routers";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http"; 
import cors from "cors";
import { dependencies } from "@/boot/dependencies";
import { adminDependencies } from "@/boot/adminDependencies";
import { salonDependencies } from "@/boot/salonDependencies";
dotenv.config();
 
const allowedOrigin = process.env.CLIENT_URL;
const clientId = process.env.CLIENT_URL;
console.log(`Client URL: ${clientId}`);
const app: Application = express();

const PROT: number = Number(process.env.PORT) || 4001;


const server= http.createServer(app)

const io= new Server(server,{
  cors:{
    origin: process.env.CLIENT_URL, // Allow frontend origin
    methods: ["GET", "POST"],
    credentials: true,
  },
  
  pingTimeout: 60000,
  transports: ['websocket', 'polling']
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", routes(dependencies));
app.use("/salon", salonRoutes(salonDependencies));
app.use("/admin", adminRoutes(adminDependencies));

const onlineUsers= new Set<string>()


io.on("connection",(socket)=>{

  console.log("new Client Connected ", socket.id);
  onlineUsers.add(socket.id)
  io.emit("update_users",Array.from(onlineUsers))
  
  socket.on("send_message",(messageData)=>{
    console.log("Message received on server:", messageData);

     // Broadcast message to all clients
   io.emit("receive_message", messageData);

  })

  socket.on("typing",(userId)=>{
    socket.broadcast.emit("typing",userId)
  })

   // Handle client disconnection
   socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
    onlineUsers.delete(socket.id)
    io.emit('update_users',Array.from(onlineUsers))
  });
  

})




app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not Found " });
});
server.listen(PROT, () => {
  console.log(`mongodb connected successfully on this ${PROT}`);
});

export default app;
