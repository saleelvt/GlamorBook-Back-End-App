import { ISalonDependencies } from '@/application/salon/interfaces/ISalonDependencies';
import { NextFunction, Request, Response } from "express";
import { Service } from '@/infrastructure/database/mongodb/models/serviceSchema';

export const deleteServiceController=(dependencies:ISalonDependencies)=>{
    return async(req: Request, res: Response, next: NextFunction)=>{
        console.log("goring for delete ");
        const {serviceId}=req.params
        await Service.deleteOne({_id:serviceId})
        return res.status(200).json({success:true,messeage:"Service successfully deleted"})
    }
}