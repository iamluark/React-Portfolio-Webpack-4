import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './routes/Routes';
import "scss/main.css";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Router />
            </HashRouter>
        );
    }
}

export default App;