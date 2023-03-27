import { TypeOrmModule } from '@nestjs/typeorm';
import { Permissionsperresource } from '../entities/Permissionsperresource';
import { Resources } from '../entities/Resources';
import { Roles } from '../entities/Roles';
import { Rolesperuser } from '../entities/Rolesperuser';
import { Users } from '../entities/Users';

export const typeOrmEntities = TypeOrmModule.forFeature([
  Users,
  Rolesperuser,
  Roles,
  Permissionsperresource,
  Resources,
]);
