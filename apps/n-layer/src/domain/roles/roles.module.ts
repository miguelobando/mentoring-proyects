import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { typeOrmEntities } from '../../persistence/db/typeOrmEntities';

@Module({
  imports: [typeOrmEntities],
  exports: [RolesService],
  providers: [RolesService],
})
export class RolesModule {}
