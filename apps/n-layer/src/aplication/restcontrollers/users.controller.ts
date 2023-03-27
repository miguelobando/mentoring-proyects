import { Body, Controller, Get, Post } from '@nestjs/common/decorators';
import {
  assignRolesDto,
  CreateUserDto,
} from '../../domain/users/interfaces/dto';
import { UsersService } from '../../domain/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body.firstName, body.lastName);
  }

  @Post('assignRole')
  assignRole(@Body() body: assignRolesDto) {
    return this.usersService.assignRole(body.userId, body.rolesIdList);
  }
}
