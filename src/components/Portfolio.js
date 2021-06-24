import React from "react";
import FadeSwitch from "./FadeSwitch";
import { Route } from "react-router-dom";
import BackButtonContext from "../contexts/back-button-context";
import PortfolioContentPage from "./PortfolioContentPage";
import InnerPage from "./InnerPage";
import { Grid, Link, Typography } from "@material-ui/core";
import PortfolioCard from "./PortfolioCard";
import PropTypes from "prop-types";

// TO-DO: Finish gathering/displaying media. Then, remove the construction message here and in PortfolioContentPage.js.
// TO-DO: Add optional GitHub link to portfolio content pages.

/*

Portfolio Content Format:

name: string // Name of portfolio entry to display.
media: string // The folder in src/media/portfolio/ containing the portfolio entry's media. Gallery displays alphabetically. Only MP4 videos are allowed.
image: string // The name of the image file in src/media/portfolio/[media]/ to use as the image shown on the main portfolio page.
cover: boolean // Whether the image should cover the entire space. Image may be cut off to have correct aspect ratio.
gallery: boolean // Whether a gallery should be displayed on the portfolio content page.
url: string // The part of the URL after portfolio/.
github: string // A link to the GitHub repository for the project (optional).
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
		github: "https://github.com/eggroll-bot/personal-website",
		paragraphs: [
			`
			Project start date: June 2021
			`,
			`
			This website is my first project created with React. When I started this project, I hadn't used JavaScript in about 4 years, so I had to
			practically re-learn the language, in addition to learning React's features. Learning the basics of React wasn't that difficult because
			the documentation for React is fairly detailed. I used the Material-UI library for most of the components in this website. Material-UI
			also has detailed documentation, so that made it easy to learn.
			`,
			`
			Overall, I'm fairly happy with how this website turned out. I will definitely be creating more React projects down the line.
			`
		]
	},
	{
		name: "🗜️ Huffman Coding",
		media: "huffman_coding",
		image: "image3.png",
		cover: false,
		gallery: true,
		url: "huffman-coding",
		github: "https://github.com/eggroll-bot/huffman-coding",
		paragraphs: [
			`
			Project start date: May 2021
			`,
			`
			This project was originally created for a Computer Systems and C Programming class (CSE 13S) at UC Santa Cruz, and has since been improved.
			For this project, I created a Huffman encoder and decoder. The encoder and decoder programs read from and write to stdin and stdout by
			default, but alternatively, they can also read from and write to files specified by command-line arguments.
			`,
			`
			The encoded file format contains a file header, a post-order Huffman tree dump, and codes for each of the symbols present in the original
			file. The file header contains a magic number, the size of the Huffman tree dump, and the size of the original file. The file header is
			always read and written in little-endian byte ordering, so it is safe to use across architectures with different endiannesses.
			`,
			`
			The Huffman encoder and decoder uses the read( ) and write( ) system calls to perform reads and writes. The encoder uses a priority queue
			ADT to construct a Huffman tree and the decoder uses a stack ADT to rebuild the Huffman tree from the dump in the encoded output.
			`,
			`
			Implementing the priority queue ADT was a good learning experience because it was the first time I had implemented one. I originally was
			going to use a min-heap to implement it, but I figured that it would probably be more complicated than inserting into an ordered array.
			Given that the priority queue would only contain a maximum of 256 elements (one for each ASCII character), the implementation method I
			chose for the priority queue would not make a significant performance difference.
			`
		]
	},
	{
		name: "♾️ Hamming Codes",
		media: "hamming_codes",
		image: "image3.png",
		cover: false,
		gallery: true,
		url: "hamming-codes",
		github: "https://github.com/eggroll-bot/hamming-codes",
		paragraphs: [
			`
			Project start date: May 2021
			`,
			`
			This project was originally created for a Computer Systems and C Programming class (CSE 13S) at UC Santa Cruz, and has since been improved.
			For this project, I created two Hamming encoders and decoders. The encoder and decoder programs read from and write to stdin and stdout by
			default, but alternatively, they can also read from and write to files specified by command-line arguments.
			`,
			`
			The first Hamming encoder and decoder uses matrix multiplication to encode and decode Hamming codes. This Hamming encoder and decoder requires
			the use of the bit vector and bit matrix ADT, and also uses memoization to speed up encoding and decoding. The second Hamming encoder and
			decoder uses lookup tables to encode and decode Hamming codes. The lookup tables used were generated using the matrix multiplication Hamming
			encoder and decoder.
			`,
			`
			The encoders will read one byte at a time, and outputs two Hamming(8, 4) codes for each byte read. The decoders will read two bytes at a
			time, and outputs the decoded byte. If a correctable error is found, the error will be corrected before the byte is outputted. If an
			uncorrectable error is found, a null character will be outputted. Statistics for errors found can be viewed with a flag in the decoders.
			`
		]
	},
	{
		name: "🔀 Sorting Algorithms",
		media: "sorting_algorithms",
		image: "image2.png",
		cover: true,
		gallery: true,
		url: "sorting-algorithms",
		github: "https://github.com/eggroll-bot/sorting-algorithms",
		paragraphs: [
			`
			Project start date: April 2021
			`,
			`
			This project was originally created for a Computer Systems and C Programming class (CSE 13S) at UC Santa Cruz, and has since been improved.
			For this project, I created a program that compares statistics of various sorting algorithms. Right now, the program is able to run bubble
			sort, shell sort with the Ciura gap sequence, shell sort with the Pratt gap sequence, recursive quicksort, quicksort with a stack, and
			quicksort with a queue.
			`,
			`
			This program runs sorting algorithms as directed by command-line arguments and outputs the sorted array as well as the number of elements
			sorted, number of moves performed, number of compares performed, and the max stack/queue size for the quicksort stack/queue implementations.
			`
		]
	},
	{
		name: "🌉 Easy Dental VixWin Bridge",
		media: "bmak_xyz", // TO-DO: Get media for this.
		image: "image1.jpg",
		cover: true,
		gallery: false, // TO-DO: Set to true once media is obtained for this.
		url: "easydental-vixwin-bridge",
		github: "https://github.com/eggroll-bot/easydental-vixwin-bridge",
		paragraphs: [
			`
			Project start date: December 2020
			`,
			`
			This project was created to bridge the Easy Dental practice management software and VixWin, a dental imaging program. VixWin ships with
			a bridge called VxLink that bridges Easy Dental and VixWin, but the bridge is very buggy and crashes a lot. This project was created to
			replace that bridge.
			`,
			`
			Right now, the program has the same workflow as VxLink. The program should be opened on startup, and will remain in the tray. When the tray
			icon is clicked, the program will grab the currently selected patient in Easy Dental and launches VixWin with the correct patient.
			`,
			`
			Internally, when the tray icon is clicked, the program will query the registry to find the patient ID of the currently selected patient.
			From there, once it has the patient ID, it will query the Easy Dental database using the ODBC interface exposed by the database. This is
			done to retrieve the first name, middle initial, and last name of the patient, which will be displayed inside of VixWin. After the full
			name is retrieved, VixWin will be launched with the appropriate flags to open the correct patient.
			`,
			`
			Figuring out the internal workings of Easy Dental and VixWin for this project was not an easy task and ended up taking quite a bit of time
			to figure out because there is no public technical documentation for these two programs.
			`
		]
	},
	{
		name: "📷 VixWin Intraoral Camera Integration",
		media: "bmak_xyz", // TO-DO: Get media for this.
		image: "image1.jpg",
		cover: true,
		gallery: false, // TO-DO: Set to true once media is obtained for this.
		url: "vixwin-intraoral-camera-integration",
		github: "https://github.com/eggroll-bot/vixwin-intraoral-camera-integration",
		paragraphs: [
			`
			Project start date: November 2020
			`,
			`
			This project was created to allow for the use of intraoral cameras with VixWin, a dental imaging program. VixWin ships with the AMCap program,
			which allows intraoral cameras to be used with VixWin, but the program freezes and crashes often. In addition, it has no support for physical
			shutter buttons. This project was created to replace that program.
			`,
			`
			When the program is opened, a tray icon and a window will appear. The tray icon's menu can be used to configure which video device to use.
			The video device's moniker string (unique identifier) is stored into a file, so the selected device saves across sessions. The window that
			appears shows a preview of the selected video device and also has a capture button. If the capture button is clicked, the image is saved
			in the VixWin database. If the video device has a shutter button, that can be used to capture as well.
			`,
			`
			Figuring out how VixWin worked internally to get this done was somewhat challenging because there is no public technical documentation for
			the program, but in the end, I was able to figure out how it worked and it seems to work fairly well.
			`
		]
	},
	{
		name: "🏎️ Garry's Mod - Auto Body NPC",
		media: "auto_body_npc",
		image: "image1.jpg",
		cover: true,
		gallery: true,
		url: "auto-body-npc",
		github: "https://github.com/eggroll-bot/auto-body-npc",
		paragraphs: [
			`
			Project start date: December 2019
			`,
			`
			This project was created to improve vehicle customization in a sandbox game called Garry's Mod. Garry's Mod is a game that has a singleplayer
			mode and a multiplayer mode. The multiplayer mode consists of game servers hosted by independent server owners. This addon targets the
			multiplayer mode.
			`,
			`
			Garry's Mod has very little vehicle customization options by default in a roleplaying game server. This addon changes that by adding the
			ability to upgrade engines, change the color of vehicles, change the skin of vehicles, change the bodygroups of vehicles (customize look
			of certain parts), and add underglow to vehicles. Each upgrade costs a certain amount of in-game currency, of which the amount is configurable
			by the game server owner.
			`
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
			`
			Project start date: November 2017
			`,
			`
			This project was created to prevent cheating in a sandbox game called Garry's Mod. Garry's Mod is a game that has a singleplayer mode and
			a multiplayer mode. The multiplayer mode consists of game servers hosted by independent server owners. This addon targets the multiplayer
			mode.
			`,
			`
			Garry's Mod servers tend to have quite a few cheaters, specifically those with aimbot (automatic aiming at targets), x-ray (seeing through
			barriers), etc. This addon aims to prevent cheating on servers. For this addon, I created a rudimentary obfuscator that obfuscates Lua
			code. The obfuscator is used on the clientside portion of the anticheat because the clientside portion of addons gets sent to the player.
			`,
			`
			Not obfuscating the clientside portion of the anticheat creates a risk of someone reverse-engineering the anticheat and finding out how to
			bypass it. Although the obfuscator I created was not that advanced, it was sufficient to prevent most people from reverse-engineering it.
			`
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
			`
			Project start date: August 2017
			`,
			`
			This project was created to reduce server lag and the number of server crashes in a sandbox game called Garry's Mod. Garry's Mod is a game
			that has a singleplayer mode and a multiplayer mode. The multiplayer mode consists of game servers hosted by independent server owners.
			This addon targets the multiplayer mode.
			`,
			`
			Garry's Mod servers are very prone to crashes. The majority of server crashes are caused by spawning too many items (prop spam). Prop spam
			causes lags and sometimes crashes a server when there are too many physics calculations for the server to handle. Sometimes, prop spam is
			accidental, and other times it is done intentionally by bad actors.
			`,
			`
			This addon aims to reduce the number of server crashes by preventing these collisions from occuring in the first place. When props are
			unfrozen, this addon will prevent the prop from colliding with other props. When props are frozen, the addon will restore the ability to
			collide with other props. Trusted players can be given a certain tag that will allow them to bypass this, in case it poses an inconvenience
			to them when building structures.
			`
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
						<PortfolioContentPage github={ item.github } media={ item.gallery ? Object.values( portfolioMedia[ item.media ] ) : null } paragraphs={ item.paragraphs } title={ item.name } />
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
								<PortfolioCard cover={ item.cover } height="288px" image={ portfolioMedia[ item.media ][ item.image ] } path={ props.match.url + "/" + item.url } text={ item.name } />
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
