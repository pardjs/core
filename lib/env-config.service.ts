'use strict';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';
const CURRENT_ENV_PATH = path.join(process.cwd(), `.${NODE_ENV}.env`);
const DEFAULT_ENV_PATH = path.join(process.cwd(), `.env`);

const loadConfigFile = () => {
  let configFilePaht = null;
  const existCurrentEnvPath = fs.existsSync(CURRENT_ENV_PATH);
  const existDefaultEnvPath = fs.existsSync(DEFAULT_ENV_PATH);

  if (existCurrentEnvPath) configFilePaht = CURRENT_ENV_PATH;
  if (!existCurrentEnvPath && existDefaultEnvPath)
    configFilePaht = DEFAULT_ENV_PATH;

  return configFilePaht && fs.readFileSync(configFilePaht);
};

export class EnvConfigService {
  private readonly envConfig: { [prop: string]: string };

  constructor(filePath: string) {
    this.envConfig = {};

    // tslint:disable-next-line:forin TOFIX
    for (const key in process.env) {
      this.envConfig[key] = process.env[key];
    }

    const dotBuff = loadConfigFile();
    const configedEnvs = dotBuff && dotenv.parse(dotBuff);

    // tslint:disable-next-line:forin TOFIX
    for (const key in configedEnvs) {
      this.envConfig[key] = configedEnvs[key];
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
