import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'views/Home';
import About from 'views/About';
import Contact from 'views/Contact';
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