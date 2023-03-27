import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permissionsperresource } from "./Permissionsperresource";

@Entity("resources", { schema: "mentoring_witi" })
export class Resources {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "name", nullable: true })
  name: string | null;

  @OneToMany(
    () => Permissionsperresource,
    (permissionsperresource) => permissionsperresource.resource
  )
  permissionsperresources: Permissionsperresource[];
}
