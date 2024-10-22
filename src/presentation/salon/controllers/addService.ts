import { ISalonDependencies } from './../../../application/salon/interfaces/ISalonDependencies';

import { NextFunction, Request, Response } from "express";

export const addServiceController =(dependencies:ISalonDependencies)=>{

    const {useCases:{ addServiceUseCase}}=dependencies


    return async(req: Request, res: Response, next: NextFunction)=>{

        const forSave= req.body
        try {
            console.log("%%%%%%%% for add service ", forSave);
            if(!forSave) return res.status(403).json({success:false})
                let response= await addServiceUseCase(dependencies).execute(forSave._id,forSave.serviceName,forSave.price,forSave.duration)
            return res.status(200).json({success:true,message:"service added ",data:response})
        } catch (error: any) {
            next(error);
          }


    }
}