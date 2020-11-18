import React from "react";
import { Switch, Route, BrowserRouter as ItemRouter } from "react-router-dom";
import Home from "views/Home/Home";

const Router = () => (
  <ItemRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </ItemRouter>
);

export default Router;
