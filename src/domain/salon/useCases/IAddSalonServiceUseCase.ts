

export interface IAddSalonServiceUseCase{
        execute(_id:string,serviceName:string,price:number,duration:number) : Promise<boolean>
}