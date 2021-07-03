import React from "react";
import "./PortfolioContentPage.css";
import { withStyles } from "@material-ui/core/styles";
import InnerPage from "./InnerPage";
import { Button, Typography } from "@material-ui/core";
import { GitHub as GitHubIcon } from "@material-ui/icons";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";

const useStyles = ( ) => ( {
	bodyText: {
		fontSize: 22,
		fontWeight: 400,
		marginBottom: "24px",
		textAlign: "justify"
	}
} );

function PortfolioContentPage( props ) {
	const media = props.media?.map( ( item ) => {
		const extension = item.match( /[^.]+$/ )[ 0 ];

		if ( extension === "mp4" ) {
			return {
				original: item,
				renderItem: ( item ) => {
					const PortfolioVideo = <video autoPlay loop muted playsInline src={ item.original } style={ { backgroundColor: "#262626", height: "450px", maxWidth: "100%" } } />;

					return PortfolioVideo;
				}
			};
		} else {
			return { original: item };
		}
	} );

	return (
		<InnerPage title={ props.title }>
			{
				props.github &&
					<div style={ { paddingBottom: "40px", textAlign: "center" } }>
						<Button color="primary" href={ props.github } rel="noopener noreferrer" size="medium" startIcon={ <GitHubIcon /> } target="_blank" variant="outlined">
							Visit GitHub Repository
						</Button>
					</div>
			}

			{
				props.media &&
					<div style={ { paddingBottom: "40px" } }>
						<ImageGallery items={ media } showFullscreenButton={ false } showPlayButton={ false } showThumbnails={ false } />
					</div>
			}

			{ props.paragraphs.map( ( item, index ) => (
				<Typography align="left" className={ props.classes.bodyText } key={ index }>
					{ item }
				</Typography>
			) ) }
		</InnerPage>
	);
}

PortfolioContentPage.propTypes = {
	classes: PropTypes.object.isRequired,
	github: PropTypes.string,
	media: PropTypes.array,
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles( useStyles, { withTheme: true } )( PortfolioContentPage );
