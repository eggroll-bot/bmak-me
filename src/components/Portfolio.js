import React from "react";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";

function Portfolio( ) {
	return (
		<InnerPage title="🤖 Portfolio">
			<Typography align="center" style={ { transform: "translateY( calc( 50vh - 250% ) )" } } variant="h3">
					This page is under construction.
			</Typography>
		</InnerPage>
	);
}

export default Portfolio;
