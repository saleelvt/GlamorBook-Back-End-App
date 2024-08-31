import { SalonEntity } from "../entities";
export interface ILoginSalonUseCase {
  execute(email: string, password: string): Promise<SalonEntity | null>;
}
