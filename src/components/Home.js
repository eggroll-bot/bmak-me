import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { Avatar, Box, Link, Typography } from "@mui/material";
import pfpImage from "../media/pfp.png";
import { Code as CodeIcon, GitHub as GitHubIcon, Info as InfoIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";

const gitHubLink = "https://github.com/eggroll-bot";
const linkedInLink = "https://www.linkedin.com/in/brian-mak/";

function Home( ) {
	return (
		<div className="Home">
			<Helmet>
				<title>🏠 Home | Brian Mak</title>
				<meta content="Brian Mak's personal website with an about me page and a portfolio." name="description" />
			</Helmet>

			<Box mb={ 3 }>
				<Avatar alt="Eggroll Profile Picture" className="avatar" src={ pfpImage } />
			</Box>

			<Box mb={ 3 }>
				<Typography gutterBottom align="center" style={ { fontWeight: 800 } } variant="h2">
					👋 Hey, I&apos;m Brian.
				</Typography>

				<Typography gutterBottom align="center" variant="h4">
					Here is my&nbsp;

					<Link href={ gitHubLink } rel="noopener noreferrer" style={ { color: "#FF845B" } }>
						<GitHubIcon /> GitHub
					</Link>

					&nbsp;and&nbsp;

					<Link color="secondary" href={ linkedInLink } rel="noopener noreferrer">
						<LinkedInIcon /> LinkedIn
					</Link>

					.
				</Typography>
			</Box>
		</div>
	);
}

export default Home;
