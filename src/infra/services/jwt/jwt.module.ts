import { Module } from "@nestjs/common";
import { jsonWebTokenJwtServiceProvider } from "./jsonwebtoken/jsonwebtoken.jwt.service.provider";

@Module({
  imports: [],
  providers: [jsonWebTokenJwtServiceProvider],
  exports: [jsonWebTokenJwtServiceProvider],
})
export class JwtModule {}