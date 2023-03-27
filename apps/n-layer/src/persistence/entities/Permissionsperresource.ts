import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Resources } from './Resources';
import { Roles } from './Roles';

@Index('resource', ['resourceid'], {})
@Index('roleid', ['roleid'], {})
@Entity('permissionsperresource', { schema: 'mentoring_witi' })
export class Permissionsperresource {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'resourceid' })
  resourceid: number;

  @Column('int', { name: 'roleid' })
  roleid: number;

  @Column('tinyint', { name: 'canwrite', width: 1 })
  canwrite: boolean;

  @Column('tinyint', { name: 'canread', width: 1 })
  canread: boolean;

  @ManyToOne(
    () => Resources,
    (resources) => resources.permissionsperresources,
    // { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
  )
  @JoinColumn([{ name: 'resourceid', referencedColumnName: 'id' }])
  resource: Resources;

  @ManyToOne(
    () => Roles,
    (roles) => roles.permissionsperresources,
    //  {
    //   onDelete: 'RESTRICT',
    //   onUpdate: 'RESTRICT',
    // }
  )
  @JoinColumn([{ name: 'roleid', referencedColumnName: 'id' }])
  role: Roles;
}
