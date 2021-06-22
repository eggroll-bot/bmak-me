import React from "react";
import FadeSwitch from "./FadeSwitch";
import { Route } from "react-router-dom";
import BackButtonContext from "../contexts/back-button-context";
import PortfolioContentPage from "./PortfolioContentPage";
import InnerPage from "./InnerPage";
import { Grid, Link, Typography } from "@material-ui/core";
import PortfolioCard from "./PortfolioCard";
import PropTypes from "prop-types";

import bmakXyzImageOne from "../media/portfolio/bmak_xyz/image1.jpg";
import huffmanCodingImageThree from "../media/portfolio/huffman_coding/image3.png";
import hammingCodesImageThree from "../media/portfolio/hamming_codes/image3.png";
import sortingAlgorithmsImageTwo from "../media/portfolio/sorting_algorithms/image2.png";
import easydentalVixwinBridgeImageOne from "../media/pfp.png"; // TO-DO: Coming soon...
import vixwinIntraoralImageOne from "../media/pfp.png"; // TO-DO: Coming soon...
import autoBodyNpcImageOne from "../media/portfolio/auto_body_npc/image1.jpg";
import anticrashImageOne from "../media/portfolio/anticrash/image1.jpg";
import anticheatImageOne from "../media/portfolio/anticheat/image1.jpg";

/*

Portfolio Content Format:

name: string // Name of portfolio entry to display.
image: string // Path to an image to display on the portfolio page.
cover: boolean // Whether the image should cover the entire space. Image may be cut off to have correct aspect ratio.
url: string // The part of the URL after portfolio/.
paragraphs: array // An array of strings with each string being a paragraph in the portfolio content page.

*/

const portfolioContent = [
	{
		name: "🌐 bmak.xyz",
		image: bmakXyzImageOne,
		cover: true,
		url: "bmak-xyz",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🗜️ Huffman Coding",
		image: huffmanCodingImageThree,
		cover: false,
		url: "huffman-coding",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "♾️ Hamming Codes",
		image: hammingCodesImageThree,
		cover: false,
		url: "hamming-codes",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🔀 Sorting Algorithms",
		image: sortingAlgorithmsImageTwo,
		cover: true,
		url: "sorting-algorithms",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🌉 Easy Dental VixWin Bridge",
		image: easydentalVixwinBridgeImageOne,
		cover: true,
		url: "easydental-vixwin-bridge",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "📷 VixWin Intraoral Camera Integration",
		image: vixwinIntraoralImageOne,
		cover: true,
		url: "vixwin-intraoral-camera-integration",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🏎️ Garry's Mod - Auto Body NPC",
		image: autoBodyNpcImageOne,
		cover: true,
		url: "auto-body-npc",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "💥 Garry's Mod - Anticrash",
		image: anticrashImageOne,
		cover: true,
		url: "anticrash",
		paragraphs: [
			"Testing",
			"123"
		]
	},
	{
		name: "🚫 Garry's Mod - Anticheat",
		image: anticheatImageOne,
		cover: true,
		url: "anticheat",
		paragraphs: [
			"Testing",
			"123"
		]
	}
];

function Portfolio( props ) {
	return (
		<FadeSwitch>
			{ portfolioContent.map( ( item, index ) => (
				<Route key={ index } path={ props.match.url + "/" + item.url }>
					<BackButtonContext.Provider value={ props.match.url }>
						<PortfolioContentPage paragraphs={ item.paragraphs } title={ item.name } />
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
								<PortfolioCard cover={ item.cover } height={ 288 } image={ item.image } path={ props.match.url + "/" + item.url } text={ item.name } />
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
