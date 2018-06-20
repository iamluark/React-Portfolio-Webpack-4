import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

import Routes from "./routes/routes";

//var hist = createBrowserHistory();

ReactDOM.render(
    <Router>
        <Routes />
    </Router>,
    document.getElementById("root")
);