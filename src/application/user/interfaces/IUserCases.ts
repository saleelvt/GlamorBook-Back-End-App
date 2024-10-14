import { dependencies } from "./../../../boot/dependencies";
import { IDependencies } from "./IDependencies";
import { IGetAllSalonUseCase } from "@/domain/user/useCases/IGetAllSalonUseCase";
import { ICreateUserUseCase } from "@/domain/user/useCases/ICreateUserUseCase";
import { ICheckUserEmailUseCase } from "@/domain/user/useCases/ICheckUserEmailUseCase";
import { IVerifyOtpUseCase } from "@/domain/user/useCases/IVerifyOtpUseCase";
import { IFindUserByEmailUseCase } from "@/domain/user/useCases/IFindUserByEmailUseCase";
import { ILoginUserUseCase } from "@/domain/user/useCases/ILoginUserUseCase";
import { IUpdatePasswordUserUseCase } from "@/domain/user/useCases/IUpdatePasswordUserUseCase";
import { ICheckUserStatusUseCase } from "@/domain/user/useCases";

export interface IUseCases {
  createUserUseCase: (dependencies: IDependencies) => ICreateUserUseCase;
  checkUserEmailUseCase: ( dependencies: IDependencies) => ICheckUserEmailUseCase;
  verifyOtpUseCase: (dependencies: IDependencies) => IVerifyOtpUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
  updateUserPasswordUseCase: (dependencies: any) => IUpdatePasswordUserUseCase;
  checkUsersStatusUseCase:(dependencies:any )=> ICheckUserStatusUseCase
  getAllSalonUseCase:(dependencies:any)=>IGetAllSalonUseCase
}
