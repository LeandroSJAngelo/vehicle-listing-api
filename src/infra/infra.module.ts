import { Module } from "@nestjs/common";
import { DatabaseModule } from "./repositories/database.module";
import { ServiceModule } from "./services/service.module";
import { WebModule } from "./web/web.modules";

@Module({
  imports: [ServiceModule, DatabaseModule, WebModule],
  exports: [ServiceModule, DatabaseModule, WebModule],
})
export class InfraModule {}