import React from "react";
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        marginLeft: 20,
        marginTop: 50
    },
    paper: {
        height: 500,
        width: 900,
        background: 'teal',
        color: 'white'
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});


class HomePage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        TEST
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);