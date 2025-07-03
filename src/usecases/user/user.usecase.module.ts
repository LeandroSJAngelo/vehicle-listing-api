import { Module } from "@nestjs/common";
import { CreateUserUsecase } from "./create/create-user.usecase";
import { FindUserUsecase } from "./find-by-id/find-user.usecase";
import { LoginUserUsecase } from "./login/login-user.usecase";
import { RefreshAuthTokenUserUsecase } from "./refresh-auth-token/refresh-auth-token.usecase";
import { DatabaseModule } from "src/infra/repositories/database.module";
import { JwtModule } from "src/infra/services/jwt/jwt.module";

@Module({
  imports: [DatabaseModule, JwtModule],
  providers: [
    CreateUserUsecase,
    FindUserUsecase,
    LoginUserUsecase,
    RefreshAuthTokenUserUsecase,
  ],
  exports: [
    CreateUserUsecase,
    FindUserUsecase,
    LoginUserUsecase,
    RefreshAuthTokenUserUsecase,
  ],
})
export class UserUsecaseModule {}