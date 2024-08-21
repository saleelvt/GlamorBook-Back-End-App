    import { IDependencies } from "../interfaces/IDependencies";
    import { UserEntity } from "@/domain/user/entities";

    export const checkUserEmailUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { checkEmail },
    } = dependencies;

    return {
        execute: async (email:string) => {
        try {
            
            return await checkEmail(email)
        } catch (error:any) {
            throw new Error(error?.message)
        }
        },
    };
    };
