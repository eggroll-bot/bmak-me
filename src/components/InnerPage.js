import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

function InnerPage( props ) {
	document.title = props.title;

	return (
		<>
			<div style={ { margin: "auto", maxWidth: "1200px" } }>
				<NavBar />

				<div style={ { paddingLeft: "5%", paddingRight: "5%", paddingTop: "30px" } }>
					{ props.children }
				</div>
			</div>
		</>
	);
}

InnerPage.propTypes = {
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ).isRequired,
	title: PropTypes.string.isRequired
};

export default InnerPage;
