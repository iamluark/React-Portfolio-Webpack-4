import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        width: '100%'
    },
};

function Content(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);