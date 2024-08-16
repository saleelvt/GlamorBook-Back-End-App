

import { IDependencies} from "@/application/user/interfaces/IDependencies";

import * as repositories from "@/infrastructure/database/mongodb/repositories"
import * as useCases from "@/application/user/useCases"

export const dependencies : IDependencies={
    repositories,
    useCases
}