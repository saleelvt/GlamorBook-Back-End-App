"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import { routes } from "@/infrastructure/routers";
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PROT = Number(process.env.PORT) || 4001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const allowedOrigin = [process.env.CLIENT_URL];
const clientId = process.env.CLIENT_URL;
console.log(`Client URL: ${clientId}`);
const corsOptions = {
    origin: allowedOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// app.use("/",routes(dependencies))
app.get("/", (req, res) => {
    res.send("saleel is a good boy ");
});
app.use("*", (req, res) => {
    res
        .status(404)
        .json({ success: false, status: 404, message: "Api Not Found " });
});
app.listen(PROT, () => {
    console.log(`mongodb connected successfully on this ${PROT}`);
});
exports.default = app;
