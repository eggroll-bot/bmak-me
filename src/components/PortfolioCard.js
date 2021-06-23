import React from "react";
import { withStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const CardMediaImageCover = withStyles( {
	img: {
		objectFit: "cover"
	}
} )( CardMedia );

function PortfolioCard( props ) {
	const history = useHistory( );

	return (
		<Card variant="outlined">
			<CardActionArea disableTouchRipple onClick={ ( ) => { history.push( props.path ); } }>
				{
					props.cover ?
						<CardMediaImageCover component="img" src={ props.image } style={ { height: props.height || "100%", width: props.width || "100%" } } /> :
						<CardMedia component="img" src={ props.image } style={ { height: props.height || "100%", width: props.width || "100%" } } />
				}

				<CardContent>
					<Typography align="center">{ props.text }</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

PortfolioCard.propTypes = {
	cover: PropTypes.bool,
	height: PropTypes.number,
	image: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	width: PropTypes.number
};

export default PortfolioCard;
