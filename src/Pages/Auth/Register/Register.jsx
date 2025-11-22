import React from "react";
import authImage from "../../../assets/auth/authImage.png";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // register an user
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((credential) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const imageApiURL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGEBB
        }`;

        axios
          .post(imageApiURL, formData)
          .then((res) => {
            // update user profile
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            updateUserProfile(userProfile)
              .then(() => {
                console.log("profile updated done");
                console.log(credential.user);
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="container2 rounded-xl grid grid-cols-1 gap-30 md:grid-cols-2">
        {/* LEFT SECTION */}
        <div className="bg-surface p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Create An Account</h2>
          <p className="text-text-secondary mb-6">Register with ZepShift</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* image input */}
            <input
              type="file"
              className="file-input mb-4"
              {...register("image", { required: true })}
            />
            {/* Name */}
            <div className="mb-4">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 outline-none"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name?.type == "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            {/* Email */}
            <div className="mb-4">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 outline-none"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email?.type == "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* Password */}
            <div className="mb-4">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-lime-400 outline-none"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~_-|\\])(?!.*\s).{8,}$/,
                })}
              />
            </div>
            {errors.password?.type == "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type == "minLength" && (
              <p className="text-red-500">
                You should use minimum 6 digit password.
              </p>
            )}
            {errors.password?.type == "pattern" && (
              <p className="text-red-500">You should use a strong password</p>
            )}

            <button className="text-sm text-lime-600 mb-4 underline cursor-pointer w-fit">
              Forgot Password?
            </button>

            {/* Login Button */}
            <button className="w-full bg-lime-400 hover:bg-lime-500 text-white py-2 rounded-lg font-medium transition">
              Register
            </button>
          </form>

          {/* Register link */}
          <Link to="/auth/login" className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-lime-600 font-medium cursor-pointer">
              Login
            </span>
          </Link>

          <SocialLogin />
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

export default Register;
