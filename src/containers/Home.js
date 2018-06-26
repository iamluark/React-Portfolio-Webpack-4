import React from "react";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// implementation
import Sidebar from 'components/Sidebar';

class HomePage extends React.Component {
    render() {
        return (
            <Grid container justify="flex-start">
                <Grid>
                    <Sidebar>
                        <Typography variant="body1" align="left" color="default">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ea temporibus in totam facilis doloribus velit labore, aliquam recusandae numquam quos quibusdam reiciendis assumenda quaerat porro tenetur vitae earum. Repudiandae.
                    </Typography>
                    </Sidebar>
                </Grid>
            </Grid>
        );
    }
}

export default HomePage;