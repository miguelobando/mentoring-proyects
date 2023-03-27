import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rolesperuser } from "./Rolesperuser";

@Index("id", ["id"], { unique: true })
@Index("username_index", ["username"], { unique: true })
@Entity("users", { schema: "mentoring_witi" })
export class Users {
  @Column("text", { name: "username", unique: true })
  username: string;

  @Column("timestamp", {
    name: "createdAt",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", { name: "isActive", width: 1 })
  isActive: boolean;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @OneToMany(() => Rolesperuser, (rolesperuser) => rolesperuser.user)
  rolesperusers: Rolesperuser[];
}
