import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

export default function SignUpForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="bg-[rgb(38,91,101)] md:w-1/2 flex flex-col items-center justify-between text-white p-6 relative">
        <div className="flex flex-col items-center text-white mt-12">
          <img src="src/assets/main-logo.png" alt="UniSync" className="w-100" />
        </div>

        <div className="flex flex-col items-center text-lg mb-6">
          <div className="mb-2">
            <span className="text-orange-300 font-semibold">Sign up</span>
            <span className="ml-8 text-white/60">Sign in</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 w-full bg-white p-8 md:px-16 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Getting Started</h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="relative w-full">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-900" />
              <input type="text" placeholder="First Name" className="w-full pl-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none" />
            </div>
            <div className="relative w-full">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-900" />
              <input type="text" placeholder="Last Name" className="w-full pl-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none" />
            </div>
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-900" />
            <input type="email" placeholder="Email" className="w-full pl-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none" />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-900" />
            <input type="password" placeholder="Password" className="w-full pl-10 pr-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none" />
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the <span className="text-orange-400 underline">Privacy Policy</span> and <span className="text-orange-400 underline">Terms & Conditions</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 py-4">
            <div className="border w-10 h-10 rounded-md flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="border w-10 h-10 rounded-md flex items-center justify-center">
              <FaGoogle />
            </div>
            <div className="border w-10 h-10 rounded-md flex items-center justify-center">
              <FaApple />
            </div>
          </div>

          <p className="text-center text-sm">
            Already have an account? <span className="text-orange-400 cursor-pointer">Sign in</span>
          </p>

          <button type="submit" className="w-full bg-[#265b65] text-white py-2 rounded-full mt-4">
            Create Account
          </button>
        </form>

        <div className="text-xs text-center mt-6 text-gray-500">
          Terms and conditions <span className="mx-2">•</span> Privacy policy
        </div>
      </div>
    </div>
  );
}