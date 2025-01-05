import React, { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const userInfo = useContext(authContext);
  return userInfo;
};

export default useAuth;
