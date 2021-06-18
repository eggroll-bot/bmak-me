import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import pfpImage from "../images/pfp.png";
import PropTypes from "prop-types";

function HomeButton( props ) {
	return (
		<div className="HomeButton" style={ { height: props.height + props.padding * 2 || 105, width: props.width + props.padding * 2 || 105, padding: props.padding } }>
			<Link to="/">
				<Avatar alt="Home Button" className="Avatar" src={ pfpImage } style={ { height: props.height || 75, width: props.width || 75 } }></Avatar>
			</Link>
		</div>
	);
}

HomeButton.propTypes = {
	height: PropTypes.number,
	padding: PropTypes.string,
	width: PropTypes.number
};

export default HomeButton;
