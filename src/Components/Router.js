// import React from 'react';
// import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import Home from "../Router/Home";
// import Search from "../Router/Search";
// import Tv from "../Router/Tv";
// import Detail from "../Router/Detail";
// import Header from "./Header";
//
//
// export default () => (
//     <Router>
//         <>
//             <Header/>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/tv" exact component={Tv} />
//                 <Route path="/search" exact component={Search} />
//                 <Route path="/movie/:id" exact component={Detail} />
//                 <Route path="/tv/:id" exact component={Detail} />
//                 <Redirect from="*" to="/" />
//             </Switch>
//         </>
//     </Router>
// )

import React from "react";
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Home from "../Router/Home";
import TV from "../Router/Tv";
import Search from "../Router/Search";
import Detail from "../Router/Detail";
import Header from "./Header";


export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" component={TV} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);