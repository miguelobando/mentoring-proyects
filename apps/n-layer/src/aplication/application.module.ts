import { Module } from '@nestjs/common';
import { ResourcesModule } from '../domain/resources/resources.module';
import { RolesModule } from '../domain/roles/roles.module';
import { UsersModule } from '../domain/users/users.module';
import { ResourcesController } from './restcontrollers/resources.controller';
import { RolesController } from './restcontrollers/roles.controller';
import { UsersController } from './restcontrollers/users.controller';
import { PermissionsController } from './restcontrollers/permissions.controller';
import { PermissionsModule } from '../domain/permissions/permissions.module';

@Module({
  imports: [UsersModule, ResourcesModule, RolesModule, PermissionsModule],
  controllers: [
    UsersController,
    ResourcesController,
    RolesController,
    PermissionsController,
  ],
})
export class AppModule {}
