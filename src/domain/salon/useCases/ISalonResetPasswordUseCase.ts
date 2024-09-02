import { SalonEntity } from "../entities";
export interface ISalonResetPasswordUseCase {
  execute(data: {
    email: string;
    password: string;
  }): Promise<SalonEntity | null>;
}
