import { Module } from '@nestjs/common';
import { ServiceModule } from './infra/services/service.module';
import { InfraModule } from './infra/infra.module';


@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
