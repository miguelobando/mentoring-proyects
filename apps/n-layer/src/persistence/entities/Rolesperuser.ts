import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Roles } from "./Roles";

@Index("id", ["id"], { unique: true })
@Index("userid", ["userid"], {})
@Index("roleid", ["roleid"], {})
@Entity("rolesperuser", { schema: "mentoring_witi" })
export class Rolesperuser {
  @Column("int", { name: "roleid" })
  roleid: number;

  @Column("int", { name: "userid" })
  userid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @ManyToOne(() => Users, (users) => users.rolesperusers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "userid", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Roles, (roles) => roles.rolesperusers, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "roleid", referencedColumnName: "id" }])
  role: Roles;
}
