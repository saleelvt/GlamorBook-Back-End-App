import { ISalonDependencies } from '@/application/salon/interfaces/ISalonDependencies'
import { NextFunction, Request, Response } from "express";

export const getAllServicesByIdController=(dependencies:ISalonDependencies)=>{

    const  {useCases:{getAllServicesUseCase}}=dependencies

    return async (req: Request, res: Response, next: NextFunction)=>{
        try {
            
            const {salonIdForPorpuse}= req.params

            console.log("this is my reqqqqqqqqqqqqqqqq",salonIdForPorpuse);
            let  response= await getAllServicesUseCase(dependencies).execute(salonIdForPorpuse)
            if(!response) return res.status(401).json({message:"services not found ", success:false})
                 return res.status(200).json({message:" got the services ",success:true,data:response})
        } catch (error) {
            next()
        }

    }

}