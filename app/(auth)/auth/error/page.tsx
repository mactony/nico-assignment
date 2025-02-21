"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error === "OAuthAccountNotLinked"
      ? "You already have an account with a different sign-in method for this email. Please sign in using your existing method."
      : "An error occurred during authentication. Please try again.";

  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Card className="space-y-6 p-8">
          <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
          <p className="mb-4">{errorMessage}</p>
          <Link href="/login" className="text-blue-500 hover:underline">
            Return to login
          </Link>
        </Card>
      </main>
    </div>
  );
}
