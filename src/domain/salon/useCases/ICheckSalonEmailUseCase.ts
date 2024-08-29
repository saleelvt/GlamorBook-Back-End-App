export interface ICheckSalonEmailUseCase {
  execute(email: string): Promise<boolean>;
}