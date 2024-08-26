  import { IDependencies } from "./IDependencies";

import { ICreateUserUseCase } from "@/domain/user/useCases/ICreateUserUseCase";
import { ICheckUserEmailUseCase } from "@/domain/user/useCases/ICheckUserEmailUseCase";
import { IVerifyOtpUseCase } from '@/domain/user/useCases/IVerifyOtpUseCase';

import { IFindUserByEmailUseCase } from "@/domain/user/useCases/IFindUserByEmailUseCase";
import { ILoginUserUseCase } from "@/domain/user/useCases/ILoginUserUseCase"





export interface IUseCases {
  createUserUseCase: (dependencies: IDependencies) => ICreateUserUseCase;
  checkUserEmailUseCase: (dependencies: IDependencies) => ICheckUserEmailUseCase;
  verifyOtpUseCase:(dependencies:IDependencies)=>IVerifyOtpUseCase;
  findUserByEmailUseCase:(dependencies:any)=>IFindUserByEmailUseCase;
  loginUserUseCase:(dependencies:any)=> ILoginUserUseCase
}
