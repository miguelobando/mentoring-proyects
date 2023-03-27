import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissionsperresource } from '../../persistence/entities/Permissionsperresource';
import { Resources } from '../../persistence/entities/Resources';
import { Roles } from '../../persistence/entities/Roles';
import { resourcesWithPermissions } from './interfaces/dto';
import { PermissionsOptions } from './interfaces/permissionsOptions';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permissionsperresource)
    private readonly permissionsRepository: Repository<Permissionsperresource>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Resources)
    private readonly resourcesRepository: Repository<Resources>,
  ) {}

  async asociateRoleAndResource(
    resourceId: number,
    roleId: number,
    options: PermissionsOptions,
  ) {
    const roleExistResult = await this.roleExist(roleId);
    if (!roleExistResult) return { success: false, message: 'Role not found' };

    const resourceExistResult = await this.resourceExist(resourceId);

    if (!resourceExistResult)
      return { success: false, message: 'Resource not found' };

    const permissions = new Permissionsperresource();
    permissions.resourceid = resourceId;
    permissions.roleid = roleId;
    permissions.canread = options.canread;
    permissions.canwrite = options.canwrite;
    console.log(permissions);
    console.log('crea el permiso');
    return this.permissionsRepository.save(permissions);
  }

  async asignResourcesToRole(
    roleId: number,
    resources: resourcesWithPermissions[],
  ) {
    const roleExistResult = await this.roleExist(roleId);
    if (!roleExistResult) return { success: false, message: 'Role not found' };

    const resourceIdList: number[] = [];
    for (const resource of resources) {
      const resourceExistResult = await this.resourceExist(resource.resourceId);
      if (!resourceExistResult)
        return {
          success: false,
          message: `Resource with id ${resource.resourceId}  not found`,
        };

      const permissionExistResult = await this.permissionExist(
        roleId,
        resource.resourceId,
      );
      if (permissionExistResult) {
        return {
          success: false,
          message: `Resource with id ${resource.resourceId} is already associated to role with id ${roleId}`,
        };
      }
      resourceIdList.push(resource.resourceId);
    }

    if (this.hasDuplicates(resourceIdList)) {
      return {
        success: false,
        message: 'There are duplicate resources in the list',
      };
    }

    for (const resource of resources) {
      const newPermission = this.permissionsRepository.create({
        resourceid: resource.resourceId,
        roleid: roleId,
        canread: resource.options.canread,
        canwrite: resource.options.canwrite,
      });

      await this.permissionsRepository.save(newPermission);
    }

    return {
      success: true,
    };
  }

  private async roleExist(roleId: number): Promise<boolean> {
    const role = await this.rolesRepository.findOne({
      where: {
        id: roleId,
      },
    });
    return role ? true : false;
  }

  private async resourceExist(resourceId: number): Promise<boolean> {
    const resource = await this.resourcesRepository.findOne({
      where: {
        id: resourceId,
      },
    });
    return resource ? true : false;
  }

  private async permissionExist(roleId: number, resourceId: number) {
    const permission = await this.permissionsRepository.findOne({
      where: {
        resourceid: resourceId,
        roleid: roleId,
      },
    });
    return permission ? true : false;
  }

  private hasDuplicates(arr: number[]): boolean {
    return new Set(arr).size !== arr.length;
  }
}
