import { dependencies } from './../../../boot/dependencies';
import { ISalonFinbyEmailUsecases } from '@/domain/salon/useCases/ISalonFindByEmailUseCase';


import { ISalonDependencies } from "./ISalonDependencies";
import { ICreateSalonUseCase,ISalonVerifyOtpUseCase,ICheckSalonEmailUseCase, ILoginSalonUseCase } from "@/domain/salon/useCases";
import { ISalonResetPasswordUseCase } from '@/domain/salon/useCases/ISalonResetPasswordUseCase';
import { IGetSalonProfileUseCase } from '@/domain/salon/useCases/IGetSalonProfileUseCase';
import { IAddSalonServiceUseCase } from '@/domain/salon/useCases/IAddSalonServiceUseCase';

export interface ISalonUseCases {
  createSalonUseCase: (dependencies: ISalonDependencies) => ICreateSalonUseCase;
  checkSalonEmailUseCase: ( dependencies: ISalonDependencies) => ICheckSalonEmailUseCase;
  verifySalonOtpUseCase: (dependencies: ISalonDependencies) => ISalonVerifyOtpUseCase;
  loginSalonUseCase:(dependencies:ISalonDependencies)=> ILoginSalonUseCase
  findSalonByEmailUseCase:(dependencies:ISalonDependencies)=> ISalonFinbyEmailUsecases
  resetSalonPasswordUseCase:(dependencies:ISalonDependencies)=> ISalonResetPasswordUseCase
  getSalonProfileUseCase :(dependencies:ISalonDependencies)=> IGetSalonProfileUseCase
  addServiceUseCase:(dependencies:ISalonDependencies) => IAddSalonServiceUseCase
}
