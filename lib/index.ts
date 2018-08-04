import { build } from './core.module';
import { NestFactory } from '@nestjs/core';

export async function boot(pardModules, port = 3000) {
  const CoreModule = build(pardModules);
  const app = await NestFactory.create(CoreModule);
  await app.listen(port);

  return app;
}
