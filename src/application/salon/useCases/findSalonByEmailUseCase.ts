
import { ISalonDependencies } from "../interfaces/ISalonDependencies"
export const findSalonByEmailUseCase= (dependencies:ISalonDependencies)=>{

    const {repositories:{salonFindByEmail}}=dependencies
    return {
        execute: async (email:string)=>{
            return await salonFindByEmail(email)
        }
    }

}
