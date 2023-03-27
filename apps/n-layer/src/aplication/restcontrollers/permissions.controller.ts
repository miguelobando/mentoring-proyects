import { Body, Controller, Post } from '@nestjs/common';
import {
  AssignPermissionsDto,
  AssignResourcesToRolesDto,
} from '../../domain/permissions/interfaces/dto';
import { PermissionsService } from '../../domain/permissions/permissions.service';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}
  @Post('')
  async create(@Body() body: AssignPermissionsDto) {
    return this.permissionsService.asociateRoleAndResource(
      body.resourceId,
      body.roleId,
      body.options,
    );
  }

  @Post('many')
  async createMany(@Body() body: AssignResourcesToRolesDto) {
    return this.permissionsService.asignResourcesToRole(
      body.roleId,
      body.resources,
    );
  }
}
