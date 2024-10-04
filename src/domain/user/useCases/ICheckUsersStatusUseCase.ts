

export  interface  ICheckUserStatusUseCase {
  execute(userId:string,role:string) : Promise<string|null|undefined>
}
