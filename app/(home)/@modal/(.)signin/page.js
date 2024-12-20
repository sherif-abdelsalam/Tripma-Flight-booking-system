"use client";
import SignInForm from "@/components/sign/signform";
import { useNavigateBackEsc } from "@/lib/hooks/navigate";

export default function SignIn() {
  useNavigateBackEsc();
  return (
    <main className="sign-page-intercept">
      <SignInForm close={true}>Login to your account</SignInForm>
    </main>
  );
}
