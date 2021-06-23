import React from "react";
import "./PortfolioContentPage.css";
import { withStyles } from "@material-ui/core/styles";
import InnerPage from "./InnerPage";
import ImageGallery from "react-image-gallery";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

// TO-DO: Finish the content page. The page should have a image/video gallery and rendering for the paragraphs prop.
// TO-DO: When the content page is done, finish gathering/displaying media, and then remove construction messages here and in Portfolio.js.

const useStyles = ( ) => ( {
	bodyText: {
		fontSize: 22,
		fontWeight: 400,
		marginBottom: "24px",
		textAlign: "justify"
	}
} );

const extensionRegex = /[^.]+$/;

class PortfolioContentPage extends React.Component {
	_renderVideo( item ) {
		return (
			<video autoPlay={ true } height={ 450 } loop={ true } src={ item.original } />
		);
	}

	render( ) {
		const media = this.props.media.map( ( item ) => {
			const extension = item.match( extensionRegex )[ 0 ];

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
				<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
				🚧 This page is under construction. 🚧
				</Typography>

				<div style={ { paddingBottom: "40px" } }>
					<ImageGallery items={ media } showFullscreenButton={ false } showPlayButton={ false } showThumbnails={ false } />
				</div>

				{ this.props.paragraphs.map( ( item, index ) => (
					<Typography align="left" className={ this.props.classes.bodyText } key={ index } paragraph={ true }>
						{ item }
					</Typography>
				) ) }
			</InnerPage>
		);
	}
}

PortfolioContentPage.propTypes = {
	classes: PropTypes.object.isRequired,
	media: PropTypes.array.isRequired,
	paragraphs: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles( useStyles, { withTheme: true } )( PortfolioContentPage );
