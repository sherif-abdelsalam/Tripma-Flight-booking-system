import SignUpForm from "@/components/sign/signform";

export default function SignUp() {
  return (
    <main className="sign-page">
      <SignUpForm isSignUp={true}>Sign up for Tripma</SignUpForm>
    </main>
  );
}
