CREATE TABLE "Users" (
  "username" string PRIMARY KEY,
  "createdAt" timestamp,
  "updatedAt" timestamp,
  "isActive" boolean,
  "roles" int
);

CREATE TABLE "Roles" (
  "id" int PRIMARY KEY,
  "name" string
);

CREATE TABLE "Resources" (
  "id" int PRIMARY KEY,
  "name" string
);

CREATE TABLE "Permissions" (
  "id" int PRIMARY KEY,
  "resource" string,
  "role" string,
  "write" boolean,
  "read" boolean
);

ALTER TABLE "Users" ADD FOREIGN KEY ("roles") REFERENCES "Roles" ("id");

ALTER TABLE "Permissions" ADD FOREIGN KEY ("resource") REFERENCES "Resources" ("id");

ALTER TABLE "Roles" ADD FOREIGN KEY ("id") REFERENCES "Permissions" ("role");
