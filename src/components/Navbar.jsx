import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
	card: {
		margin: 50,
		background: 'lightgrey',
		maxWidth: 250
	}
}

function Navbar(props) {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardContent>
				{props.children}
			</CardContent>
		</Card>
	);
}

Navbar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);