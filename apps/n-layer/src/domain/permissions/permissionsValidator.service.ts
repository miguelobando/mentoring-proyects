import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissionsperresource } from '../../persistence/entities/Permissionsperresource';
import { Resources } from '../../persistence/entities/Resources';
import { Roles } from '../../persistence/entities/Roles';
import { ValidatorResponse } from './interfaces/validatorResponse';
@Injectable()
export class PermissionsValidatorService {
  constructor(
    @InjectRepository(Permissionsperresource)
    private readonly permissionsRepository: Repository<Permissionsperresource>,
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
    @InjectRepository(Resources)
    private readonly resourcesRepository: Repository<Resources>,
  ) {}

  async resourceValidator(
    roleId: number,
    resourceId: number,
  ): Promise<ValidatorResponse> {
    const resourceExistResult = await this.resourceExist(resourceId);

    const roleExistResult = await this.roleExist(roleId);
    if (!roleExistResult) return { success: false, message: 'Role not found' };

    if (!resourceExistResult)
      return {
        success: false,
        message: `Resource with id ${resourceId}  not found`,
      };

    const permissionExistResult = await this.permissionExist(
      roleId,
      resourceId,
    );
    if (permissionExistResult) {
      return {
        success: false,
        message: `Resource with id ${resourceId} is already associated to role with id ${roleId}`,
      };
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
}
