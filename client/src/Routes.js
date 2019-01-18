import React from "react";
import { Route, Switch } from "react-router-dom";

import LaunchList from "./components/LaunchList";
import NoMatch from "./components/NoMatch";

export default () =>
    <Switch>
        <Route exact path="/"  component={ LaunchList } />

        <Route path="*" component={ NoMatch } />
    </Switch>