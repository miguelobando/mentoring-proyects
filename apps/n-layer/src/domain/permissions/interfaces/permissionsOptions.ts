import { IsBoolean } from 'class-validator';

export class PermissionsOptions {
  @IsBoolean()
  canwrite: boolean;
  @IsBoolean()
  canread: boolean;
}
