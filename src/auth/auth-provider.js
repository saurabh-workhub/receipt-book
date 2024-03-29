import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_APP_DOMAIN;
  const clientId = process.env.REACT_APP_APP_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    history.push("home");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`${process.env.REACT_APP_LOGIN_URL}/home`}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
