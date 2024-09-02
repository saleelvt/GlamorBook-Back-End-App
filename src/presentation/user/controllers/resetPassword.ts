import { NextFunction, Request, Response } from 'express';
import { dependencies } from './../../../boot/dependencies';



import { IDependencies } from "@/application/user/interfaces/IDependencies"
export const resetPasswordController= (dependencies:IDependencies)=>{


    return async (req:Request,res:Response,next:NextFunction)=>{


        const {data}= req.body

        console.log('tis si my data ', data );
        

    }

    }