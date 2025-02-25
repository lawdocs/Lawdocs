import { SignIn } from "@clerk/clerk-react";

function SignInPage() {


  return (
   
        <SignIn
          path="/signin"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/dashboard" // Replaces afterSignInUrl
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600",
              formFieldInput: "border-gray-300 focus:border-blue-500",
            },
          }}
        />
   
  );
}

export default SignInPage;
