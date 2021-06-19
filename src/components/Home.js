import React from "react";
import "./Home.css";
import { Avatar, Box, Button, Grid, Link, Typography } from "@material-ui/core";
import pfpImage from "../images/pfp.png";
import { Code as CodeIcon, GitHub as GitHubIcon, Info as InfoIcon, LinkedIn as LinkedInIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const gitHubLink = "https://github.com/eggroll-bot";
const linkedInLink = "https://www.linkedin.com/in/brian-mak/";

function Home( ) {
	document.title = "🏠 Home";
	const history = useHistory( );

	return (
		<div className="Home">
			<Box mb={ 3 }>
				<Avatar alt="Eggroll Profile Picture" className="Avatar" src={ pfpImage } />
			</Box>

			<Box mb={ 3 }>
				<Typography align="center" gutterBottom={ true } style={ { fontWeight: 800 } } variant="h2">
					👋 Hey, I&apos;m Brian.
				</Typography>

				<Typography align="center" gutterBottom={ true } variant="h4">
					Here is my&nbsp;

					<Link href={ gitHubLink } rel="noopener noreferrer" style={ { color: "#FF845B" } } target="_blank">
						<GitHubIcon /> GitHub
					</Link>

					&nbsp;and&nbsp;

					<Link color="secondary" href={ linkedInLink } rel="noopener noreferrer" target="_blank">
						<LinkedInIcon /> LinkedIn
					</Link>

					.
				</Typography>
			</Box>

			<Grid container align="center" justify="center" spacing={ 5 }>
				<Grid item>
					<Button color="primary" onClick={ ( ) => { history.push( "/about-me" ); } } size="medium" startIcon={ <InfoIcon /> } variant="outlined">
						About Me
					</Button>
				</Grid>

				<Grid item>
					<Button color="primary" onClick={ ( ) => { history.push( "/portfolio" ); } } size="medium" startIcon={ <CodeIcon /> } variant="outlined">
						Portfolio
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
