import React from "react";
import NavBar from "./NavBar";
import { Typography } from "@material-ui/core";

function AboutMe( ) {
	document.title = "About Me";

	return (
		<div className="AboutMe">
			<NavBar />
			<Typography align="center" style={ { transform: "translateY( calc( 50vh - 200% ) )" } } variant="h3">This page is under construction.</Typography>
		</div>
	);
}

export default AboutMe;
