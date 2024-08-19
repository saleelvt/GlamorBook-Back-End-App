"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongose = require("mongose");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoUrl = process.env.mongoURL;
        console.log("my url ", mongoUrl);
        if (!mongoUrl) {
            throw new Error(" Mongo_url environment variable is not dfined");
        }
        yield mongose.connect(mongoUrl.trim());
        console.log("data base connected successfully");
    }
    catch (error) {
        console.error("data base cnnection failed");
        console.error(error.message);
        process.exit(1);
    }
});
exports.db = db;
