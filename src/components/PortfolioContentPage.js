import React from "react";
import "./PortfolioContentPage.css";
import InnerPage from "./InnerPage";
import { Button } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import ImageGallery from "react-image-gallery";
import TypographyBody from "./TypographyBody";
import PropTypes from "prop-types";

function PortfolioContentPage( props ) {
	const media = props.media?.map( ( item ) => {
		const extension = item.match( /[^.]+$/ )[ 0 ];

		if ( extension === "mp4" ) {
			return {
				original: item,
				renderItem: ( item ) => (
					<video autoPlay loop muted playsInline src={ item.original } style={ { backgroundColor: "#262626", height: "450px", maxWidth: "100%" } } />
				)
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
						<Button href={ props.github } rel="noopener noreferrer" startIcon={ <GitHubIcon /> } target="_blank" variant="outlined">
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
				<TypographyBody align="left" key={ index }>
					{ item }
				</TypographyBody>
			) ) }
		</InnerPage>
	);
}

PortfolioContentPage.propTypes = {
	github: PropTypes.string,
	media: PropTypes.array,
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default PortfolioContentPage;
