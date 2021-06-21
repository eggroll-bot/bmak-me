import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

function PortfolioContentPage( props ) {
	return (
		<Typography>
			{ props.paragraphs.toString( ) /* Temporary */ }
		</Typography>
	);
}

PortfolioContentPage.propTypes = {
	paragraphs: PropTypes.array.isRequired
};

export default PortfolioContentPage;
