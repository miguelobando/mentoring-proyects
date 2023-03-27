import { Module } from '@nestjs/common';
import { NLayerController } from './n-layer.controller';
import { NLayerService } from './n-layer.service';
import { AppModule } from './aplication/application.module';
import { Dbmysql } from './persistence/db/mysqlConection';
import { ConfigModule } from './persistence/config/config.module';

@Module({
  imports: [AppModule, Dbmysql, ConfigModule],
  controllers: [NLayerController],
  providers: [NLayerService],
})
export class NLayerModule {}
