import React from 'react';
import { browserHistory } from 'react-router';

const PageNotFound = () => (
    <div className="PageNotFound">
        <h1>Page Not Found</h1>
        <div
            className='button'
            onClick={() => browserHistory.push(`${process.env.PUBLIC_URL}/`)}
        >
            Home
    </div>
    </div>
);

export default PageNotFound;