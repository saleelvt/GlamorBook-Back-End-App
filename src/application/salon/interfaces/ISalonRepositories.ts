import { SalonEntity } from "@/domain/salon/entities";

export interface ISalonRepositories {
  salonCreate: (data: SalonEntity) => Promise<SalonEntity | null>;
}
