import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const domain = process.env.REACT_APP_APP_DOMAIN;
  const clientId = process.env.REACT_APP_APP_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
