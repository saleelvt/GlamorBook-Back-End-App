

import { UserEntity } from "@/domain/user/entities";

export interface IRepositories {
  create: (data: UserEntity) => Promise<UserEntity | null>;
}
