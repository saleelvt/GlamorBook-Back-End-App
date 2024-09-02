
import { UserEntity } from "../entities";

export  interface  IUpdatePasswordUserUseCase {

    execute(data:{
        email:string,
        password:string,
    }):Promise<UserEntity|null>

}
    