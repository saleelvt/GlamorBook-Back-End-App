

import { UserEntity } from "@/domain/user/entities";

export interface IRepositories {
  create: (data: UserEntity) => Promise< UserEntity | null>;
  checkEmail:(email:string)=> Promise<boolean>;
  verifyOtpRepo:(email:string,otp:string[])=> Promise<boolean>;
  findByEmail:(email:string)=> Promise<UserEntity|null>
  updateUserPassword:(data:{email:string,password:string})=> Promise <UserEntity|null>
}
