import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (logout({returnTo: `${process.env.REACT_APP_LOGIN_URL}`}));
};

export default Logout;