import { Module } from '@nestjs/common';
import { typeOrmEntities } from '../../persistence/db/typeOrmEntities';
import { ResourcesService } from './resources.service';

@Module({
  imports: [typeOrmEntities],
  exports: [ResourcesService],
  providers: [ResourcesService],
})
export class ResourcesModule {}
