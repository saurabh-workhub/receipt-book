import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/loading";
import Home from "./components/home";
import ProtectedRoute from "./auth/protected-route";
import Account from "./components/account";
import Logout from "./components/logout";
import Login from "./components/login";
import PrinterSetup from "./components/printer-setup";
import { PrintContextProvider } from './services/print-context';
import React from "react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PrintContextProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/printer" component={PrinterSetup} />
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/logout" component={Logout} />
      </Switch>
    </PrintContextProvider>
  )
}

export default App;
