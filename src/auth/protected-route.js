import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

const ProtectedRoute = ({ layout, component, ...args }) => (
  <Route
    {...args}
    render={(props) =>
      layout ?
        React.createElement(layout, props, React.createElement(
          withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />,
          }), props))
        : React.createElement(
          withAuthenticationRequired(component, {
            onRedirecting: () => <Loading />,
          }), props)
    }
  />
);

export default ProtectedRoute;
