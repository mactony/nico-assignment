import type { UserRole } from "@prisma/client";
import type { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: UserRole;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser extends User {}
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
