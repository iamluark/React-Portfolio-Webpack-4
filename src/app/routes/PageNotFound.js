import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    location: PropTypes.object.isRequired,
};

export default function PageNotFound() {
    return (
        <p>
            Page not found - the path, No Code,
            did not match any React Router routes.
    </p>
    );
}

PageNotFound.propTypes = propTypes;