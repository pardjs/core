import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { EnvConfigService } from './env-config.service';
import { ProjConfigService } from './proj-config.service';

// TODO: udpate type
export function build(modules: any[]): any {
  @Module({
    imports: modules,
    controllers: [CoreController],
    providers: [EnvConfigService, ProjConfigService],
  })
  class CoreModule {}

  return CoreModule;
}
