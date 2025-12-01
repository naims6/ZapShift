import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // request interceptors
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `bearer ${user?.accessToken}`;
      console.log({ config, user });
      return config;
    });
    // response interceptor
    const resInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        // console.log("Response", res);
        return res;
      },
      (err) => {
        // console.log("Error", err);
        const status = err.status;
        if (status === 401 || status === 403) {
          signOutUser().then(() => {
            navigate("/auth/login");
          });
        }
        return Promise.reject(err);
      }
    );
    // eject
    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, navigate, signOutUser]);

  return axiosSecure;
};

export default useAxiosSecure;
