import React from "react";

import Navbar from 'components/Navbar';
import Typography from '@material-ui/core/Typography';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ea temporibus in totam facilis doloribus velit labore, aliquam recusandae numquam quos quibusdam reiciendis assumenda quaerat porro tenetur vitae earum. Repudiandae.</p>
                </Navbar>
                <Navbar>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ea temporibus in totam facilis doloribus velit labore, aliquam recusandae numquam quos quibusdam reiciendis assumenda quaerat porro tenetur vitae earum. Repudiandae.</p>
                </Navbar>
            </div>
        );
    }
}

export default HomePage;