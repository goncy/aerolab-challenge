import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// Containers / Pages
import HomePage from "./containers/HomePage";
// import ProfilePage from "./containers/ProfilePage";

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={HomePage} path="/" />
        {/* <Route exact component={ProfilePage} path="/profile" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default routes;
