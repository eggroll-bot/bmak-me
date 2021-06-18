import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import pfpImage from "../images/pfp.png";
import PropTypes from "prop-types";

function HomeButton( props ) {
	return (
		<div className="HomeButton" style={ { height: props.height || 100, width: props.width || 100 } }>
			<Link to="/">
				<Avatar alt="Home Button" className="Avatar" src={ pfpImage } style={ { height: props.height || 100, width: props.width || 100 } }></Avatar>
			</Link>
		</div>
	);
}

HomeButton.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number
};

export default HomeButton;
