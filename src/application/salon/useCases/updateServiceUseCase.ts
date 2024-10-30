
import { ISalonDependencies } from '../interfaces/ISalonDependencies';

import { IUpdateService } from '@/domain/salon/entities/updateService';


export const updateServiceUseCase =(dependencies:ISalonDependencies)=>{

    const {repositories:{updateServiceById}}=dependencies
    return {
        execute:async(obj:IUpdateService)=>{
            try {
                console.log("my items in useCasess", obj );   
                await updateServiceById(obj)  
            }catch (error: any) {
                throw new Error(error?.message);
              }
        }
    }

}