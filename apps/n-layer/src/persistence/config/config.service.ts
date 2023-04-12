import { Injectable } from '@nestjs/common';
import 'dotenv/config';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    this.envConfig = {};
    this.validateEnvApp();
  }

  private validateParam(param: string): string {
    if (process.env[param] === undefined) {
      throw new Error(`Config validation error: Environment without ${param}`);
    } else {
      return process.env[param];
    }
  }

  private validateEnvApp(): void {
    this.envConfig.DATABASE_HOST = this.validateParam('DATABASE_HOST');
    this.envConfig.DATABASE_PORT = this.validateParam('DATABASE_PORT');
    this.envConfig.DATABASE_USER = this.validateParam('DATABASE_USER');
    this.envConfig.DATABASE_NAME = this.validateParam('DATABASE_NAME');
    this.envConfig.DATABASE_PASSWORD = this.validateParam('DATABASE_PASSWORD');
  }

  get DATA_BASE_HOST(): string {
    return this.envConfig.DATABASE_HOST;
  }

  get DATA_BASE_PASSWORD(): string {
    return this.envConfig.DATABASE_PASSWORD;
  }

  get DATA_BASE_PORT(): string {
    return this.envConfig.DATABASE_PORT;
  }

  get DATA_BASE_USER(): string {
    return this.envConfig.DATABASE_USER;
  }

  get DATA_BASE_NAME(): string {
    return this.envConfig.DATABASE_NAME;
  }
}
