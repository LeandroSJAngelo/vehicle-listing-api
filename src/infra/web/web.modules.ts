import { Module } from "@nestjs/common";
import { UsecaseModule } from "src/usecases/usecase.module";
import { ServiceModule } from "../services/service.module";
import { CreateUserRoute } from "./routes/user/create/create-user.route";

@Module({
  imports: [ServiceModule, UsecaseModule],
  exports: [],
  controllers: [CreateUserRoute],
})
export class WebModule {}