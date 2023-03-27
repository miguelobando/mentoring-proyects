import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Roles } from '../../persistence/entities/Roles';

@Injectable()
export class RoleValidatorService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  async roleExist(roleId: number) {
    const roleExistResult = await this.rolesRepository.findOne({
      where: { id: roleId },
    });
    if (roleExistResult) return true;
    else false;
  }
}
