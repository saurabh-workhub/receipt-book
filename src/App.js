import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import Home from "./components/home";
import ProtectedRoute from "./auth/protected-route";
import Account from "./components/account";
import Logout from "./components/logout";
import Login from "./components/login";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <ProtectedRoute path="/receipt-book-site/home" component={Home} />
      <ProtectedRoute path="/receipt-book-site/account" component={Account} />
      <ProtectedRoute path="/receipt-book-site/logout" component={Logout} />
    </Switch>
  )
}

export default App;
