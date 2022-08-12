import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...props }) => {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? props.children : <Redirect to="./sign-in" />
      }
    </Route>
  );
};

export default ProtectedRoute;