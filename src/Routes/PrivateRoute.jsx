import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
