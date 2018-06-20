import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';
import Contact from 'containers/Contact';

import PageNotFound from './routes/PageNotFound';

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
        </Switch>
    );
}