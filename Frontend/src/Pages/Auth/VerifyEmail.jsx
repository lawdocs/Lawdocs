import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [code, setCode] = useState("");
  const { signUp } = useSignUp();
  const navigate=useNavigate()

  const verifyHandler = async (e) => {
    e.preventDefault();
    try {
      await signUp.attemptEmailAddressVerification({ code });
      navigate('/signin')
      
      console.log("Email verified successfully");
      // Redirect to dashboard or home page
    } catch (error) {
      console.log("Email verification failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={verifyHandler}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Verify Email
        </h2>
        <input
          placeholder="Enter Verification Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Verify
        </button>
      </form>
    </div>
  );
}

export default VerifyEmail;
