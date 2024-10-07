import { IDependencies } from '@/application/user/interfaces/IDependencies';
import { dependencies } from './../../../boot/dependencies';
import { Request, Response, NextFunction } from "express";



export const getEveryUsersStatusController =(dependencies:IDependencies)=>{

    const {useCases:{checkUsersStatusUseCase}}=dependencies
  

    return async (req: Request, res: Response, next: NextFunction)=>{


        try {
            const {userId,role} =req.params
            console.log("the datas for fetch the user Status================", userId,role);
            
            
            if(  ! userId&&role) return res.status(403).json({success:false,message:"userId or role is null or undifined "})

                const  response = await checkUsersStatusUseCase(dependencies).execute(userId,role)
                console.log("this is my status checking in the usecase fof the data an d result ", response);
                
                return res.status(200).json({success:true,data:response})

        } catch (error: any) {
            next(error);
          }


    }

}