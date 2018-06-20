import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import App from 'app/App'
import Home from 'containers/Home';
import About from 'containers/About';
import Contact from 'containers/Contact';
import PageNotFound from './PageNotFound';

export default function Routes() {
    return (
        <HashRouter history={history}>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </HashRouter>
    );
}