import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permissionsperresource } from "./Permissionsperresource";
import { Rolesperuser } from "./Rolesperuser";

@Entity("roles", { schema: "mentoring_witi" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "name" })
  name: string;

  @OneToMany(
    () => Permissionsperresource,
    (permissionsperresource) => permissionsperresource.role
  )
  permissionsperresources: Permissionsperresource[];

  @OneToMany(() => Rolesperuser, (rolesperuser) => rolesperuser.role)
  rolesperusers: Rolesperuser[];
}
