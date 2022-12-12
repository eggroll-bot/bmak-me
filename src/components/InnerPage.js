import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./NavBar";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

function InnerPage( props ) {
	return (
		<div style={ { margin: "auto", maxWidth: "1200px" } }>
			<Helmet>
				<title>{ props.title + " | Brian Mak" }</title>
				<meta content={ props.description } name="description" />
			</Helmet>

			<NavBar />

			<div style={ { paddingLeft: "5%", paddingRight: "5%", paddingTop: "30px", paddingBottom: "30px" } }>
				<Typography align="center" style={ { fontWeight: 800, paddingBottom: "40px" } } variant="h2">
					{ props.title }
				</Typography>

				{ props.children }
			</div>
		</div>
	);
}

InnerPage.propTypes = {
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ).isRequired,
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default InnerPage;
