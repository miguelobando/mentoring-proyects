import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from '../../persistence/entities/Roles';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}

  async getRoles() {
    return this.rolesRepository.find();
  }

  async createRole(role: string) {
    const newRole = this.rolesRepository.create({
      name: role,
    });
    return await this.rolesRepository.save(newRole);
  }
}
