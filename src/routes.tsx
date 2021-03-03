import React from "react";
import {Switch, Route} from "react-router-dom";

// Containers / Pages
import HomePage from "./containers/HomePage";
import ProfilePage from "./containers/ProfilePage";

const routes = () => {
  return (
    <Switch>
      <Route exact component={HomePage} path="/" />
      <Route exact component={ProfilePage} path="/profile" />
    </Switch>
  );
};

export default routes;
