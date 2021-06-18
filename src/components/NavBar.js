import React from "react";
import { Typography } from "@material-ui/core";
import HomeButton from "./HomeButton";
import PropTypes from "prop-types";

function NavBar( props ) {
	return (
		<div className="NavBar" style={ { backgroundColor: "#474747" } }>
			<HomeButton padding="15px" />
			<Typography align="center" style={ { fontWeight: 800 } } variant="h2">{props.title || document.title}</Typography>
		</div>
	);
}

NavBar.propTypes = {
	title: PropTypes.string
};

export default NavBar;
