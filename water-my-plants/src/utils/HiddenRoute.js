import React from "react";
import { Route, Redirect } from "react-router-dom";

const HiddenRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/userpage" />;
        }
      }}
    />
  );
};

export default HiddenRoute;
