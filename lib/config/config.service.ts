'use strict';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

export class ConfigService {
  private readonly configs: { [prop: string]: string };

  constructor(
    filePath: string = path.join(process.cwd(), `.${process.env.NODE_ENV}.env`),
  ) {
    const defaultConfig = dotenv.parse(
      fs.readFileSync(path.join(process.cwd(), `.env`)),
    );
    const envConfig = dotenv.parse(fs.readFileSync(filePath));
    this.configs = Object.assign({}, defaultConfig, envConfig);
  }

  get(key: string): string {
    return this.configs[key];
  }
}
