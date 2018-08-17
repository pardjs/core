import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { EnvConfigService } from './env-config.service';
import { ProjConfigService } from './proj-config.service';
import { ConfigModule } from './config/config.module';

// TODO: update type
export function build(modules: any[]): any {
  @Module({
    imports: [ConfigModule].concat(modules),
    controllers: [CoreController],
    providers: [EnvConfigService, ProjConfigService],
  })
  class CoreModule {}

  return CoreModule;
}
