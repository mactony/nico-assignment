import { auth } from "@/auth";
import RegisterForm from "@/components/forms/RegisterForm";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Register - Nick's Tutoring Hub",
  description: "Create an account to access our academic writing services.",
};

export default async function RegisterPage() {
  const session = await auth(); // Get the session on the server

  // Redirect authenticated users
  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-2">
          <RegisterForm />
          <div className="relative hidden overflow-hidden rounded-lg bg-[#1a103d] lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            <div className="relative flex h-full flex-col items-center justify-center p-8 text-center text-white">
              <div className="mb-4 rounded bg-white/10 p-3">
                <div className="text-2xl">Nicks Pro</div>
              </div>
              <h2 className="mb-2 text-2xl font-bold">Writing Services</h2>
              <p className="mb-8 text-lg text-white/80">
                Let us help you submit quality work before deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
