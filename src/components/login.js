import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { Redirect } from "react-router";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    isAuthenticated ? <Redirect to='/home' /> : loginWithRedirect({redirectUri: `http://${window.location.hostname}:3000/home`})
  })

  return null;
};

export default Login;