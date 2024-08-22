import { dependencies } from './../../../boot/dependencies';
import { ICreateUserUseCase } from "@/domain/user/useCases/ICreateUserUseCase";
import { ICheckUserEmailUseCase } from "@/domain/user/useCases/ICheckUserEmailUseCase";
import { IVerifyOtpUseCase } from '@/domain/user/useCases/IVerifyOtpUseCase';
import { IDependencies } from "./IDependencies";





export interface IUseCases {
  createUserUseCase: (dependencies: IDependencies) => ICreateUserUseCase;
  checkUserEmailUseCase: (dependencies: IDependencies) => ICheckUserEmailUseCase;
  verifyOtpUseCase:(dependencies:IDependencies)=>IVerifyOtpUseCase
}

