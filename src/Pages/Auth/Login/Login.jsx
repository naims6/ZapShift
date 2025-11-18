import React from "react";
import authImage from "../../../assets/auth/authImage.png";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="container2 rounded-xl grid grid-cols-1 gap-30 md:grid-cols-2">
        {/* LEFT SECTION */}
        <div className="bg-surface p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-text-secondary mb-6">Login with ZepShift</p>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 outline-none"
            />
          </div>

          <button className="text-sm text-lime-600 mb-4 underline cursor-pointer w-fit">
            Forgot Password?
          </button>

          {/* Login Button */}
          <button className="w-full bg-lime-400 hover:bg-lime-500 text-white py-2 rounded-lg font-medium transition">
            Login
          </button>

          {/* Register link */}
          <Link to="/auth/register" className="mt-4 text-sm text-gray-600">
            Don't have any account?{" "}
            <span className="text-lime-600 font-medium cursor-pointer">
              Register
            </span>
          </Link>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-2 text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Login with Google
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden md:flex items-center justify-center bg-[#f7fbe9] p-8">
          <img
            src={authImage}
            alt="login illustration"
            className="w-80 md:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
