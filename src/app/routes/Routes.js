import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexRoute } from 'react-router';

import App from 'app/App';

import Home from 'containers/Home';
import About from 'containers/About';
import Contact from 'containers/Contact';

import PageNotFound from './PageNotFound';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
        </Switch>
    );
}