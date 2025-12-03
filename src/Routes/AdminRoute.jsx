import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();
  console.log({ role, roleLoading });

  if (loading || roleLoading) {
    return <h1>Loading...</h1>;
  }

  if ("admin" !== role) {
    return <h1>Your are not an admin only admin can view this page</h1>;
  }

  return children;
};

export default AdminRoute;
