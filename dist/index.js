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
const server_1 = __importDefault(require("@/presentation/server"));
const db_1 = require("@/boot/db");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        server_1.default;
        yield (0, db_1.db)()
            .then(() => console.log("data base connected succesfully "))
            .catch((error) => {
            console.error("error while connecting mongodb", error);
            process.exit(0);
        });
    }
    catch (error) {
        console.log("Error on start up: ", error);
    }
    finally {
        process.on("sigint", () => __awaiter(void 0, void 0, void 0, function* () {
            console.log("server is shutting down ");
            process.exit();
        }));
    }
}))();
