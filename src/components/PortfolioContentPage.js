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

class PortfolioContentPage extends React.Component {
	_renderVideo( item ) {
		return (
			<video autoPlay loop muted playsInline src={ item.original } style={ { backgroundColor: "#262626", height: "450px", maxWidth: "100%" } } />
		);
	}

	render( ) {
		const media = this.props.media?.map( ( item ) => {
			const extension = item.match( /[^.]+$/ )[ 0 ];

			if ( extension === "mp4" ) {
				return {
					original: item,
					renderItem: this._renderVideo.bind( this )
				};
			} else {
				return { original: item };
			}
		} );

		return (
			<InnerPage title={ this.props.title }>
				{
					this.props.github &&
					<div style={ { paddingBottom: "40px", textAlign: "center" } }>
						<Button color="primary" href={ this.props.github } rel="noopener noreferrer" size="medium" startIcon={ <GitHubIcon /> } target="_blank" variant="outlined">
							Visit GitHub Repository
						</Button>
					</div>
				}

				{
					this.props.media &&
					<div style={ { paddingBottom: "40px" } }>
						<ImageGallery items={ media } showFullscreenButton={ false } showPlayButton={ false } showThumbnails={ false } />
					</div>
				}

				{ this.props.paragraphs.map( ( item, index ) => (
					<Typography align="left" className={ this.props.classes.bodyText } key={ index }>
						{ item }
					</Typography>
				) ) }
			</InnerPage>
		);
	}
}

PortfolioContentPage.propTypes = {
	classes: PropTypes.object.isRequired,
	github: PropTypes.string,
	media: PropTypes.array,
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles( useStyles, { withTheme: true } )( PortfolioContentPage );
