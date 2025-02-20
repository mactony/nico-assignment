import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import { SignInSchema } from "./lib/schemas";
import bcrypt from "bcryptjs";
import { UserRole } from "@prisma/client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
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
          throw new Error("No user found");
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
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.role = user.Role;
    //   }
    //   return token;
    // },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
});
