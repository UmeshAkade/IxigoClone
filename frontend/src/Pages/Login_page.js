import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Log in to ixigo</h1>

        {/* Mobile Number Input */}
        <div className="flex items-center border border-blue-400 rounded-lg mb-4 overflow-hidden bg-blue-50">
          <div className="px-4 py-2 border-r border-blue-400 text-gray-600 bg-blue-100">+91</div>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full p-2 outline-none bg-blue-50 text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Continue Button */}
        <button
          className="w-full py-2 mb-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Continue
        </button>

        {/* Other Login Options */}
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">Other login options:</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
            <FcGoogle className="mr-2" /> Log in with Google
          </button>
          <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-blue-600 hover:bg-gray-100 transition duration-300">
            <FaFacebookF className="mr-2" /> Log in with Facebook
          </button>
        </div>

        {/* Terms & Privacy Policy */}
        <p className="text-center text-sm text-gray-500 mt-6">
          By proceeding, you agree to our{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">T&C</span> and{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">Privacy policy</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
