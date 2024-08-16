
import {ICreateUserUseCase} from "@/domain/user/useCases/ICreateUserUseCase"
import { IDependencies } from "./IDependencies"

export interface IUseCases{
    createUserUseCase:(dependencies:IDependencies)=> ICreateUserUseCase;
}