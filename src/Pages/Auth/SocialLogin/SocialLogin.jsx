import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((credential) => {
        // user info
        const userInfo = {
          displayName: credential.user.displayName,
          photoURL: credential.user.photoURL,
          email: credential.user.providerData[0]?.email,
        };
        // add user info in database
        axiosSecure
          .post("/users", userInfo)
          .then((res) => {
            if (res?.data?.insertedId) {
              alert("User info added in database");
            }
            navigate("/");
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
    <>
      {/* Divider */}
      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-2 text-gray-500 text-sm">Or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
      >
        Login with Google
      </button>
    </>
  );
};

export default SocialLogin;
