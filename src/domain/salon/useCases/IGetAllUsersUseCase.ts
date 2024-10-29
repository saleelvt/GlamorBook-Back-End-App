import { UserEntity } from "@/domain/user/entities"


export interface IGetAllUsersUseCase{
    execute():Promise<UserEntity[]>
}