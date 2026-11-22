import React from 'react'
import {
  // Github,
  Cloud,
  LogIn,
} from "lucide-react";
export default function login() {
  return (
    <div className="min-h-screen bg-[#0a0715] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-[#161322] border border-[#262238] rounded-2xl p-8 shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#7c5cff] flex items-center justify-center">
              <Cloud className="text-white w-7 h-7" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">
              Synthetix AI
            </h1>
            <p className="text-gray-400 mt-2">
              Sign in to your workspace
            </p>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#222030] border border-[#33304a] text-white text-sm font-medium hover:bg-[#2a273b] transition">
              <Cloud size={16} />
              GOOGLE
            </button>

            <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#222030] border border-[#33304a] text-white text-sm font-medium hover:bg-[#2a273b] transition">
              {/* <Github size={16} /> */}
              GITHUB
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-[#2f2a45]"></div>
            <span className="px-4 text-gray-500 text-sm">
              or continue with email
            </span>
            <div className="flex-grow border-t border-[#2f2a45]"></div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full bg-[#0f0b18] border border-[#2f2a45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#7c5cff]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[#8d72ff] text-sm hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#0f0b18] border border-[#2f2a45] rounded-lg px-4 py-3 text-white outline-none focus:border-[#7c5cff]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="stay"
                className="accent-[#7c5cff]"
              />
              <label htmlFor="stay" className="text-sm text-gray-400">
                Stay signed in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7c5cff] hover:bg-[#6d4eff] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              Sign In
              <LogIn size={18} />
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#2f2a45] text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-[#8d72ff] font-semibold hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</p>

          <div className="flex justify-center gap-6 mt-2">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
  
}
