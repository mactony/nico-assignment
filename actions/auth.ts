"use server";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import {
  SignInSchema,
  SignInSchemaType,
  SignUpSchema,
  SignUpSchemaType,
} from "@/lib/schemas";
import { prisma } from "@/lib/prisma";

export const userSignIn = async (data: SignInSchemaType) => {
  const validatedFields = SignInSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.message,
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: error.cause?.err?.message || "An error occurred",
      };
    }

    throw error;
  }
};

export const userSignUp = async (data: SignUpSchemaType) => {
  const validatedFields = SignUpSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.message,
    };
  }

  const { name, email, password } = validatedFields.data;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return {
      error: "User already exists. Please sign in instead.",
    };
  }

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    omit: {
      password: true,
    },
  });

  await userSignIn({
    email,
    password,
  });
};

export async function googleSignIn() {
  try {
    await signIn("google", { redirect: false });
  } catch (error) {
    return { error: "Failed to sign in with Google. Please try again." };
  }
}
