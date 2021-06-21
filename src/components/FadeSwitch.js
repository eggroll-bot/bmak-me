import React from "react";
import "./FadeSwitch.css";
import { AnimatedSwitch, spring } from "react-router-transition";
import PropTypes from "prop-types";

function fade( value ) {
	return spring( value, {
		stiffness: 275,
		damping: 25,
	} );
}

function FadeSwitch( props ) {
	const fadeTransition = {
		atEnter: {
			opacity: 0
		},
		atLeave: {
			opacity: fade( 0 )
		},
		atActive: {
			opacity: fade( 1 )
		},
	};

	return (
		<AnimatedSwitch atActive={ fadeTransition.atActive } atEnter={ fadeTransition.atEnter } atLeave={ fadeTransition.atLeave } className="switch-wrapper">
			{ props.children }
		</AnimatedSwitch>
	);
}

FadeSwitch.propTypes = {
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ).isRequired
};

export default FadeSwitch;
