
import { UserEntity } from "../entities";

export interface ICreateUserUseCase{
    execute(data:UserEntity):Promise <UserEntity|null>
}