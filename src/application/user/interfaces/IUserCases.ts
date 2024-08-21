import { ICreateUserUseCase } from "@/domain/user/useCases/ICreateUserUseCase";
import { ICheckUserEmailUseCase } from "@/domain/user/useCases/ICheckUserEmailUseCase";


import { IDependencies } from "./IDependencies";

export interface IUseCases {
  createUserUseCase: (dependencies: IDependencies) => ICreateUserUseCase;
  checkUserEmailUseCase: (dependencies: IDependencies) => ICheckUserEmailUseCase;
}

