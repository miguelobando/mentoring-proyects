import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export interface CreateUserDto {
  firstName: string;
  lastName: string;
}

export class assignRolesDto {
  @IsNumber()
  userId: number;

  @IsArray()
  rolesIdList: number[];
}
