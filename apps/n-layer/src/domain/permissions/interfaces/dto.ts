import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { PermissionsOptions } from './permissionsOptions';

export class AssignPermissionsDto {
  @IsNumber()
  resourceId: number;
  @IsNumber()
  roleId: number;
  @IsObject()
  options: PermissionsOptions;
}

export class resourcesWithPermissions {
  @IsNumber()
  resourceId: number;
  @IsObject()
  options: PermissionsOptions;
}

export class AssignResourcesToRolesDto {
  @IsNumber()
  roleId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => resourcesWithPermissions)
  resources: resourcesWithPermissions[];
}
