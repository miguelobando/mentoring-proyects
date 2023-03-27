import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoleDto } from '../../domain/roles/interfaces/dto';
import { RolesService } from '../../domain/roles/roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get('')
  async getRoles() {
    return this.rolesService.getRoles();
  }

  @Post('')
  async create(@Body() role: CreateRoleDto) {
    return this.rolesService.createRole(role.name);
  }
}
