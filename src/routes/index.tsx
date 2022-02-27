import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ConfirmUser } from "../pages/ConfirmUser";


export const Routes = () => {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/confirm/:userId" component={ConfirmUser} />
      </Switch>
    );
};
  