import React from "react";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function PortfolioContentPage( props ) {
	return (
		<InnerPage backButton={ true } title={ props.title }>
			<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
				🚧 This page is under construction. 🚧
			</Typography>
		</InnerPage>
	);
}

PortfolioContentPage.propTypes = {
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default PortfolioContentPage;
