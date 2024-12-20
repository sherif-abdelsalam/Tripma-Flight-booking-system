"use client";
import SignUpForm from "@/components/sign/signform";
import { useNavigateBackEsc } from "@/lib/hooks/navigate";

export default function SignUp() {
  useNavigateBackEsc();
  return (
    <main className="sign-page-intercept">
      <SignUpForm isSignUp={true} close={true}>
        Sign up for Tripma
      </SignUpForm>
    </main>
  );
}
