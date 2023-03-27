import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rolesperuser } from '../../persistence/entities/Rolesperuser';
import { Users } from '../../persistence/entities/Users';
import { RoleValidatorService } from '../roles/roleValidator.service';
import { ValidateAndAssignService } from './validateAndAssignInfo.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly validateAndAssign: ValidateAndAssignService,
    private readonly validateRole: RoleValidatorService,
    @InjectRepository(Rolesperuser)
    private readonly rolesPerUserRepository: Repository<Rolesperuser>,
  ) {}

  async getUsers() {
    return this.usersRepository.find();
  }

  async createUser(firstName: string, lastName: string) {
    const validationRes = await this.validateAndAssign.checkAndAssignUsername(
      firstName,
      lastName,
    );
    if (!validationRes.isValid) {
      return new HttpException(
        { reason: 'Invalid names, no special characters and numbers allowed' },
        409,
      );
    }

    const user = this.usersRepository.create({
      username: validationRes.username,
      isActive: false,
    });

    return this.usersRepository.save(user);
  }

  async assignRole(userId: number, rolesIdList: number[]) {
    if (!this.userExist(userId)) {
      return new HttpException({ reason: 'User not found' }, 409);
    }

    for (const role of rolesIdList) {
      const roleExist = await this.validateRole.roleExist(role);
      if (!roleExist) {
        return new HttpException({ reason: 'Role not found' }, 409);
      }

      const roleAssociated = await this.rolesPerUserRepository.findOne({
        where: { userid: userId, roleid: role },
      });
      if (roleAssociated) {
        return new HttpException({ reason: 'Role already associated' }, 409);
      }
    }

    for (const role of rolesIdList) {
      const rolePerUser = new Rolesperuser();
      rolePerUser.userid = userId;
      rolePerUser.roleid = role;
      await this.rolesPerUserRepository.save(rolePerUser);
    }

    return {
      success: true,
    };
  }

  private async userExist(userId: number) {
    const userExistResult = await this.usersRepository.find({
      where: { id: userId },
    });
    if (userExistResult) return true;
    else false;
  }
}
