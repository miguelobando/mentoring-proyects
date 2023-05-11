import { Module } from '@nestjs/common';
import { HexagonalController } from './hexagonal.controller';
import { HexagonalService } from './hexagonal.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresqlConfigService } from './infraestructure/postgresql-database/entities/postgresql.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresqlConfigService,
      inject: [PostgresqlConfigService],
    }),
  ],
  controllers: [HexagonalController],
  providers: [HexagonalService, PostgresqlConfigService],
})
export class HexagonalModule {}
