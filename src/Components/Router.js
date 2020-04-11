import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Router/Home";
import Search from "../Router/Search";
import TV from "../Router/TV";

export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />

        </>
    </Router>
)