import { Module } from "@nestjs/common";
import { UserUsecaseModule } from "./user/user.usecase.module";

@Module({
  imports: [UserUsecaseModule],
  exports: [UserUsecaseModule],
})
export class UsecaseModule {}