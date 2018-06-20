import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
//import { createBrowserHistory } from 'history';

import Routes from "./routes/routes";

//var hist = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root")
);