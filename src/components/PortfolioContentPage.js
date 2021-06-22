import React from "react";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish the content page. The page should have a image/video gallery and rendering for the paragraphs prop.
// TO-DO: When the content page is done, finish gathering/displaying media, and then remove construction messages here and in Portfolio.js.

function PortfolioContentPage( props ) {
	return (
		<InnerPage title={ props.title }>
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
