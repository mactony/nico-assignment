"use client";
import * as React from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, type SignInSchemaType } from "@/lib/schemas";
import { userSignIn } from "@/actions/auth";
import { toast } from "sonner";
import GoogleButton from "./GoogleButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  let redirectToPage = searchParams.get("redirectTo") ?? "/dashboard";
  if (redirectToPage === "/login") {
    redirectToPage = "/dashboard";
  }

  // Check if the user just registered
  const isNewUser = searchParams.get("newUser") === "true";

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignInSchemaType) {
    startTransition(async () => {
      try {
        const res = await userSignIn(values);
        if (res && "error" in res) {
          toast.error(res.error);
          return;
        }

        // Success message
        toast.success("Successfully logged in!");

        // Redirect to the intended page or dashboard
        router.push(redirectToPage);
        router.refresh();
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <div className="flex w-full items-center justify-center p-4">
      <Card className="w-full max-w-[688px] p-8">
        {isNewUser && (
          <div className="mb-6 rounded-md bg-green-100 p-4 text-green-700">
            <p className="text-center font-semibold">
              Welcome! Your account has been created successfully. Please log in
              to continue.
            </p>
          </div>
        )}
        <div className="flex items-center justify-between flex-col gap-y-4 lg:flex-row">
          <h1 className="text-2xl font-semibold">Log in to Nicks Pro</h1>
          <div className="text-sm text-muted-foreground">
            New to Nicks Pro?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Sign Up →
            </Link>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              startTransition(() => {
                onSubmit(values);
              });
            })}
            className="mt-8 space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      type="email"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        disabled={isPending}
                        className=""
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
              Log In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>

            <GoogleButton />
          </form>
        </Form>
      </Card>
    </div>
  );
}
