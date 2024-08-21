export interface ICheckUserEmailUseCase {
  execute(email: string): Promise<boolean>;
}
