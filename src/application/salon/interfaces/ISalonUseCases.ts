

import { ISalonDependencies } from "./ISalonDependencies";
import { ICreateSalonUseCase,ISalonVerifyOtpUseCase,ICheckSalonEmailUseCase, ILoginSalonUseCase } from "@/domain/salon/useCases";

export interface ISalonUseCases {
  createSalonUseCase: (dependencies: ISalonDependencies) => ICreateSalonUseCase;
  checkSalonEmailUseCase: ( dependencies: ISalonDependencies) => ICheckSalonEmailUseCase;
  verifySalonOtpUseCase: (dependencies: ISalonDependencies) => ISalonVerifyOtpUseCase;
  loginSalonUseCase:(dependencies:ISalonDependencies)=> ILoginSalonUseCase
}
