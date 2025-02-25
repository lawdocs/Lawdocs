import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
        afterSignUpUrl="/"
      />
    </div>
  );
}

export default SignUpPage;
