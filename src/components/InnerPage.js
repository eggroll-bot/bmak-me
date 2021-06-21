import React from "react";
import NavBar from "./NavBar";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function InnerPage( props ) {
	document.title = props.title;

	return (
		<div style={ { margin: "auto", maxWidth: "1200px" } }>
			<NavBar backButton={ props.backButton } />

			<div style={ { paddingLeft: "5%", paddingRight: "5%", paddingTop: "30px" } }>
				<Typography align="center" style={ { fontWeight: 800, paddingBottom: "40px" } } variant="h2">
					{ document.title }
				</Typography>

				{ props.children }
			</div>
		</div>
	);
}

InnerPage.propTypes = {
	backButton: PropTypes.bool,
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ).isRequired,
	title: PropTypes.string.isRequired
};

export default InnerPage;
