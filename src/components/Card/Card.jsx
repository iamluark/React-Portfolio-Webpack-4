import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cardStyle from 'assets/jss/components/cardStyle.jsx';

function Card(props) {
	const { classes, className, children, plain, carousel } = props;
	const cardClasses = classNames({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardCarousel]: carousel,
		[className]: className !== undefined
	});
	return (
		<div className={cardClasses}>
			{children}
		</div>
	);
}

Card.propTypes = {
	classes: PropTypes.object.isRequired,
	className: PropTypes.string,
	plain: PropTypes.bool,
	carousel: PropTypes.bool
};

export default withStyles(cardStyle)(Card);