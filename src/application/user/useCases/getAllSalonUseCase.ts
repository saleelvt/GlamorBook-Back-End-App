import { getAllSalon } from './../../../infrastructure/database/mongodb/repositories/user/getAllSalon';

import { IDependencies } from '../interfaces/IDependencies';




export const getAllSalonUseCase =(dependencies:IDependencies)=>{
    const {repositories:{getAllSalon}}=dependencies


    return {
        execute:async()=>{
            try {
                console.log("hay this my execute function for fetch all salon for print");
                const response= await getAllSalon()
                return response
            }  
            catch (error: any) {
                throw new Error(error.message || "user creation failed");
              }


        }
    }

   

}