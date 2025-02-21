"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error === "OAuthAccountNotLinked"
      ? "You already have an account with a different sign-in method for this email. Please sign in using your existing method."
      : "This email is already associated with an account. Please sign in again using your email.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
        <p className="mb-4">{errorMessage}</p>
        <Link href="/login" className="text-blue-500 hover:underline">
          Return to login
        </Link>
      </main>
    </div>
  );
}
