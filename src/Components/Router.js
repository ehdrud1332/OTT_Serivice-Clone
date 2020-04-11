import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Router/Home";
import Search from "../Router/Search";
import TV from "../Router/TV";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)