import React from 'react'
import { motion } from 'framer-motion'

export default function ScheduleAuthentication() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-white">
      {/* Logo and Tagline */}
      <img
        src="/src/assets/logo-icon.png" // Update this path if your logo is in a different folder
        alt="UniSync Logo"
        className="w-40 h-40 mb-4"
      />
      <h1 className="text-3xl font-bold text-slate-800">UniSync</h1>
      <p className="text-sm text-slate-500 mb-8">Your Time, Perfectly Timed</p>

      {/* Status Text with Fade In/Out Animation */}
      <motion.h2
        className="text-lg sm:text-xl text-slate-700 font-medium"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        Generating Your Personal Class Schedule...
      </motion.h2>

      {/* Framer Motion Bouncing Dots Loader */}
      <div className="flex mt-6 space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-green-800 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
