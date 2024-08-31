
export interface ISalonVerifyOtpUseCase{
    execute(email:string,otp:string[]):Promise<boolean>
}