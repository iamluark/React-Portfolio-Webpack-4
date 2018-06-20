import React, { Component } from 'react';

class App extends Component {
    render() {
        const { children, location } = this.props;
        return (
            <div className="App">
                <h1>React-Router path: {location.pathname}</h1>
                <h1>Browser URL: {`${window.location.hostname} ${window.location.pathname}`}</h1>
                {children}
            </div>
        );
    }
}

export default App;