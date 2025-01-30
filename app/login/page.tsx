import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login - Nick's Tutoring Hub",
  description:
    "Login to access your account and manage your academic services.",
};

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
