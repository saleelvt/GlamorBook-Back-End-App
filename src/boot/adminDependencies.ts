
import { IAdminDependencies } from "@/application/admin/interfaces/IAdminDependencies";
import * as  repositories from '@/infrastructure/database/mongodb/repositories'
import * as useCases from "@/application/admin/useCases"

export const adminDependencies:IAdminDependencies={
    repositories,
    useCases,
}