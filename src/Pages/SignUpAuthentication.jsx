import React from 'react'
import { motion } from 'framer-motion'

export default function SignUpAuthentication() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="bg-[#265b65] md:w-1/2 flex flex-col items-center justify-between text-white p-6 relative">
        <div className="flex flex-col items-center text-white mt-12">
          <img src="/src/assets/main-logo.png" alt="Workspace" className="w-100" />
        </div>

        <div className="flex flex-col items-center text-lg mb-6">
          <div className="mb-2">
            <span className="text-orange-300 font-semibold">Sign up</span>
            <span className="ml-8 text-white/60">Sign in</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full bg-white relative px-6 py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full"
        />
        <p className="mt-6 text-xl text-gray-700 font-medium">Creating Your Account</p>

        <div className="absolute bottom-4 text-xs text-gray-500">
          <span className="mr-2">Terms and conditions</span>
          <span className="mx-1">•</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </div>
  )
}
