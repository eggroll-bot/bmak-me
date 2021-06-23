import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish the content page. The page should have a image/video gallery and rendering for the paragraphs prop.
// TO-DO: When the content page is done, finish gathering/displaying media, and then remove construction messages here and in Portfolio.js.

const useStyles = makeStyles( {
	bodyText: {
		fontSize: 22,
		fontWeight: 400,
		marginBottom: "24px",
		textAlign: "justify"
	}
} );

function PortfolioContentPage( props ) {
	const classes = useStyles( );

	return (
		<InnerPage title={ props.title }>
			<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
				🚧 This page is under construction. 🚧
			</Typography>

			{ props.paragraphs.map( ( item, index ) => (
				<Typography align="left" className={ classes.bodyText } key={ index } paragraph={ true }>
					{ item }
				</Typography>
			) ) }
		</InnerPage>
	);
}

PortfolioContentPage.propTypes = {
	media: PropTypes.object.isRequired,
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default PortfolioContentPage;
