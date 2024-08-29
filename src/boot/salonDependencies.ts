import { ISalonDependencies } from "@/application/salon/interfaces/ISalonDependencies";

import * as repositories from "@/infrastructure/database/mongodb/repositories";
import * as useCases from "@/application/salon/useCases"


export const salonDependencies: ISalonDependencies = {
  repositories,
  useCases,
};
