import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Injectable()
export class PostgresqlConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('POSTGRES_URL'),
      password: this.config.get<string>('POSTGRES_PASSWORD'),
      username: this.config.get<string>('POSTGRES_USER'),
      database: this.config.get<string>('POSTGRES_DB'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}
