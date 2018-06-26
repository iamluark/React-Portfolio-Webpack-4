import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import MenuIcon from '@material-ui/icons/Menu'

const styles = {
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%',
	}
}

function Sidebar(props) {
	const { classes } = props;
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image="https://images.unsplash.com/photo-1529623006503-4691681e048d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0b78e6449f4c2e6b517dc3ac9bd3da6&auto=format&fit=crop&w=382&q=80"
				title="Clark Git">
				<MenuIcon className={classes.icons} />
			</CardMedia>
			<CardContent>
				{props.children}
			</CardContent>
		</Card>
	);
}

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);