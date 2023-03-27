import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidateAndAssignService } from './validateAndAssignInfo.service';
import { typeOrmEntities } from '../../persistence/db/typeOrmEntities';
import { RoleValidatorService } from '../roles/roleValidator.service';

@Module({
  imports: [typeOrmEntities],
  exports: [UsersService, RoleValidatorService],
  providers: [UsersService, ValidateAndAssignService, RoleValidatorService],
})
export class UsersModule {}
