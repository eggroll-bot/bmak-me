import React from "react";
import FadeSwitch from "./FadeSwitch";
import { Route } from "react-router-dom";
import InnerPage from "./InnerPage";
import { Grid, Typography } from "@material-ui/core";
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

*/

const portfolioContent = [
	{
		name: "bmak.xyz",
		image: bmakXyzImageOne,
		cover: true
	},
	{
		name: "Huffman Coding",
		image: huffmanCodingImageThree,
		cover: false
	},
	{
		name: "Hamming Codes",
		image: hammingCodesImageThree,
		cover: false
	},
	{
		name: "Sorting Algorithms",
		image: sortingAlgorithmsImageTwo,
		cover: true
	},
	{
		name: "Easy Dental VixWin Bridge",
		image: easydentalVixwinBridgeImageOne,
		cover: true
	},
	{
		name: "VixWin Intraoral Camera Integration",
		image: vixwinIntraoralImageOne,
		cover: true
	},
	{
		name: "Garry's Mod - Auto Body NPC",
		image: autoBodyNpcImageOne,
		cover: true
	},
	{
		name: "Garry's Mod - Anticrash",
		image: anticrashImageOne,
		cover: true
	},
	{
		name: "Garry's Mod - Anticheat",
		image: anticheatImageOne,
		cover: true
	}
];

function Portfolio( props ) {
	return (
		<FadeSwitch>
			<Route path={ props.match.url + "/test" }>
				Test
			</Route>

			<Route path={ props.match.url }>
				<InnerPage title="🤖 Portfolio">
					<Typography align="center" style={ { paddingBottom: "40px" } } variant="h4">
						🚧 This page is under construction. 🚧
					</Typography>

					<Grid container justify="center" spacing={ 2 }>
						{ portfolioContent.map( ( item, index ) => (
							<Grid item key={ index } style={ { width: 512 } }>
								<PortfolioCard cover={ item.cover } height={ 288 } image={ item.image } text={ item.name } />
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
