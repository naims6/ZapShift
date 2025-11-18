import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";

const useAuth = () => {
  return use(AuthContext);
};

export default useAuth;
