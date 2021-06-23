import React from "react";
import FadeSwitch from "./FadeSwitch";
import { Route } from "react-router-dom";
import BackButtonContext from "../contexts/back-button-context";
import PortfolioContentPage from "./PortfolioContentPage";
import InnerPage from "./InnerPage";
import { Grid, Link, Typography } from "@material-ui/core";
import PortfolioCard from "./PortfolioCard";
import PropTypes from "prop-types";

// TO-DO: Finish gathering/displaying media, re-order media so videos are first, finish content descriptions, and then remove construction messages here and in PortfolioContentPage.js.

/*

Portfolio Content Format:

name: string // Name of portfolio entry to display.
media: string // The folder in src/media/portfolio/ containing the portfolio entry's media. Gallery displays alphabetically. Only MP4 videos are allowed.
image: string // The name of the image file in src/media/portfolio/[media]/ to use as the image shown on the main portfolio page.
cover: boolean // Whether the image should cover the entire space. Image may be cut off to have correct aspect ratio.
gallery: boolean // Whether a gallery should be displayed on the portfolio content page.
url: string // The part of the URL after portfolio/.
paragraphs: array // An array of strings with each string being a paragraph in the portfolio content page.

*/

const portfolioContent = [
	{
		name: "🌐 bmak.xyz",
		media: "bmak_xyz",
		image: "image1.jpg",
		cover: true,
		gallery: false,
		url: "bmak-xyz",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🗜️ Huffman Coding",
		media: "huffman_coding",
		image: "image3.png",
		cover: false,
		gallery: true,
		url: "huffman-coding",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "♾️ Hamming Codes",
		media: "hamming_codes",
		image: "image3.png",
		cover: false,
		gallery: true,
		url: "hamming-codes",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🔀 Sorting Algorithms",
		media: "sorting_algorithms",
		image: "image2.png",
		cover: true,
		gallery: true,
		url: "sorting-algorithms",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🌉 Easy Dental VixWin Bridge",
		media: "bmak_xyz", // TO-DO: Get media for this.
		image: "image1.jpg",
		cover: true,
		gallery: false, // TO-DO: Set to true once media is obtained for this.
		url: "easydental-vixwin-bridge",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "📷 VixWin Intraoral Camera Integration",
		media: "bmak_xyz", // TO-DO: Get media for this.
		image: "image1.jpg",
		cover: true,
		gallery: false, // TO-DO: Set to true once media is obtained for this.
		url: "vixwin-intraoral-camera-integration",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🏎️ Garry's Mod - Auto Body NPC",
		media: "auto_body_npc",
		image: "image1.jpg",
		cover: true,
		gallery: true,
		url: "auto-body-npc",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "💥 Garry's Mod - Anticrash",
		media: "anticrash",
		image: "image1.jpg",
		cover: true,
		gallery: true,
		url: "anticrash",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🚫 Garry's Mod - Anticheat",
		media: "anticheat",
		image: "image1.jpg",
		cover: true,
		gallery: true,
		url: "anticheat",
		paragraphs: [
			"Testing",
			"123"
		]
	}
];

const portfolioMedia = { };
var context = require.context( "../media/portfolio" );

context.keys( ).forEach( ( filePath ) => {
	const pathMatches = filePath.substring( 2 ).match( /[^/]+/g );
	const mediaDirectoryName = pathMatches[ 0 ];
	const mediaFileName = pathMatches[ 1 ];
	portfolioMedia[ mediaDirectoryName ] = portfolioMedia[ mediaDirectoryName ] || { }; // Create array if it doesn't exist.
	portfolioMedia[ mediaDirectoryName ][ mediaFileName ] = context( filePath ).default;
} );

function Portfolio( props ) {
	return (
		<FadeSwitch>
			{ portfolioContent.map( ( item, index ) => (
				<Route key={ index } path={ props.match.url + "/" + item.url }>
					<BackButtonContext.Provider value={ props.match.url }>
						<PortfolioContentPage media={ item.gallery ? Object.values( portfolioMedia[ item.media ] ) : null } paragraphs={ item.paragraphs } title={ item.name } />
					</BackButtonContext.Provider>
				</Route>
			) ) }

			<Route path={ props.match.url }>
				<InnerPage title="🤖 Portfolio">
					<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
						🚧 This page is under construction. 🚧
					</Typography>

					<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
						My résumé can be found <Link color="secondary" href="/resume.pdf" target="_blank">here</Link>.
					</Typography>

					<Grid container justify="center" spacing={ 2 }>
						{ portfolioContent.map( ( item, index ) => (
							<Grid item key={ index } style={ { width: 512 } }>
								<PortfolioCard cover={ item.cover } height={ 288 } image={ portfolioMedia[ item.media ][ item.image ] } path={ props.match.url + "/" + item.url } text={ item.name } />
							</Grid>
						) ) }
					</Grid>
				</InnerPage>
			</Route>
		</FadeSwitch>
	);
}

Portfolio.propTypes = {
	match: PropTypes.object.isRequired
};

export default Portfolio;
