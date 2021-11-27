import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Redirect } from "react-router";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    isAuthenticated ? <Redirect to="/home" /> : loginWithRedirect({redirectUri: `${process.env.REACT_APP_LOGIN_URL}/home`})
  })

  return null;
};

export default Login;