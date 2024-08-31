
import { ISalonRepositories } from "./ISalonRepositories";
import { ISalonUseCases } from "./ISalonUseCases";

export interface ISalonDependencies {
    repositories:ISalonRepositories,
    useCases:ISalonUseCases
}