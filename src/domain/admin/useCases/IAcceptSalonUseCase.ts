import { SalonEntity } from "@/domain/salon/entities";
export interface IAcceptSalonUseCase {
  execute(salonId:string,status:string): Promise< SalonEntity | null>;
}
