"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import {
  SignInSchema,
  SignInSchemaType,
  SignUpSchema,
  SignUpSchemaType,
} from "@/lib/schemas";

export const userSignIn = async (data: SignInSchemaType) => {
  const validatedFields = SignInSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: validatedFields.error.message };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", { email, password, redirect: false });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error:
          error.cause?.err?.message ||
          "Invalid email or password. Please try again.",
      };
    }
    return { error: "An unexpected error occurred. Please try again later." };
  }
};

export const userSignUp = async (data: SignUpSchemaType) => {
  const validatedFields = SignUpSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: validatedFields.error.message };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return { error: "User already exists. Please sign in instead." };
    }

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    // Automatically sign in the user
    const signInResponse = await userSignIn({ email, password });

    if (signInResponse?.error) {
      return { error: signInResponse.error };
    }

    return { success: "User registered successfully." };
  } catch (error) {
    console.error("Error during user sign-up:", error);
    return { error: "Failed to create an account. Please try again later." };
  }
};

export async function googleSignIn() {
  try {
    await signIn("google", { redirectTo: "/" });
  } catch (error) {
    return { error: "Failed to sign in with Google. Please try again." };
  }
}
