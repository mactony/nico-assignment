import NextAuth, { User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { SignInSchema } from "@/lib/schemas";
import bcrypt from "bcryptjs";
import type { UserRole } from "@prisma/client";
import type { Adapter } from "next-auth/adapters";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    github,
    google,
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = await SignInSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          throw new Error("No user found. Please sign up");
        }

        const isValid = bcrypt.compareSync(password, user.password!);

        if (!isValid) {
          throw new Error("Invalid password");
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role as UserRole,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (user.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        if (existingUser) {
          if (
            !existingUser.accounts.some(
              (acc) => acc.provider === account?.provider
            )
          ) {
            return false;
          }
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
  //   pages: {
  //     error: "/auth/error",
  //   },
  debug: process.env.NODE_ENV === "development",
});
