import { auth } from "@/auth";
import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Login",
  description:
    "Login to access your account and manage your academic services.",
};

export default async function LoginPage() {
  const session = await auth(); // Get the session on the server

  // Redirect authenticated users
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="relative bg-[#f4f4f2]">
      <div className="relative max-w-[1440px] mx-auto px-5 md:px-6 lg:px-12 xl:px-0 pb-12 md:pb-16 lg:pb-20 pt-12 md:pt-16 lg:pt-20 border-[#00000021] xl:border-x">
        <div className="max-w-7xl mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
