"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SignupConfirmationProps {
  email?: string;
  username?: string;
}

export default function SignupConfirmation({
  email = "user@example.com",
  username = "username",
}: SignupConfirmationProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <Card className="w-full max-w-[400px] p-8">
        <div className="text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="mt-4 text-2xl font-semibold">Welcome to Expo!</h1>
          <div className="mt-2 space-y-2 text-muted-foreground">
            <p>
              Your account has been created successfully with the following
              details:
            </p>
            <div className="rounded-lg bg-muted/50 p-4 text-sm">
              <p>
                Username:{" "}
                <span className="font-medium text-foreground">{username}</span>
              </p>
              <p>
                Email:{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Link href="/login">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Continue to login
            </Button>
          </Link>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Didn't receive the confirmation email?{" "}
              <button className="text-blue-500 hover:underline">
                Resend email
              </button>
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
          <h2 className="font-medium">Get started with Expo</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Check out our quick start guide to begin building your first Expo
            app.
          </p>
          <Button variant="link" className="mt-2 h-auto p-0 text-blue-500">
            Read the documentation →
          </Button>
        </div>
      </Card>
    </div>
  );
}
