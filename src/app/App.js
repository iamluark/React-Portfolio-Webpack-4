import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './routes/Routes';

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