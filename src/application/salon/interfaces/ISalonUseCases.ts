import {
  ICreateSalonUseCase,
  ICheckSalonEmailUseCase,
} from "@/domain/salon/useCases";
import { ISalonDependencies } from "./ISalonDependencies";

export interface ISalonUseCases {
  createSalonUseCase: (dependencies: ISalonDependencies) => ICreateSalonUseCase;
  checkSalonEmailUseCase: ( dependencies: ISalonDependencies ) => ICheckSalonEmailUseCase;
}
