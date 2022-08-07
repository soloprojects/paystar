import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({ children, ...rest }) {
  const user = Cookies.getJSON("user");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
