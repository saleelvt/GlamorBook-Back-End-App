// import dotenv from 'dotenv';
// dotenv.config();

// let EMAIL:String=String(process.env.EMAIL);
// let PASSWORD: string = String(process.env.EMAIL_PASSWORD);
// export{
//     EMAIL,
//     PASSWORD,
// }

import { config } from "dotenv";
config()
let EMAIL: string = String(process.env.EMAIL);
let PASSWORD: string = String(process.env.EMAIL_PASSWORD);

export{
    EMAIL,
    PASSWORD,
}