
import { UserEntity } from "../entities";

export interface createUserUseCase{
    execute(data:UserEntity):Promise <UserEntity|null>
}