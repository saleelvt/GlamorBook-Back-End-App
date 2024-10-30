import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";
import { IUpdateService } from "@/domain/salon/entities/updateService";

import { NextFunction, Request, Response } from "express";

export const updateServiceController = (dependencies: ISalonDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
                const {useCases:{updateServiceUseCase}}=dependencies
    try {
        const {serviceName,price,duration,_id}=req.body
        console.log(serviceName,price,duration,_id,'=======================');
        let obj:IUpdateService= {_id,serviceName,price,duration}
        await updateServiceUseCase(dependencies).execute(obj)
        return res.status(200).json({success:true,message:"service updated "})
    } catch (error) {
        next()
    }
  };
};
