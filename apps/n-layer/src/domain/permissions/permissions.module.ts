import { Module } from '@nestjs/common';
import { typeOrmEntities } from '../../persistence/db/typeOrmEntities';
import { PermissionsService } from './permissions.service';
@Module({
  imports: [typeOrmEntities],
  exports: [PermissionsService],
  providers: [PermissionsService],
})
export class PermissionsModule {}
