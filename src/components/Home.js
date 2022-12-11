import React from "react";
import "./Home.css";
import { Avatar, Box, Button, Grid, Link, Typography } from "@mui/material";
import pfpImage from "../media/pfp.png";
import { Code as CodeIcon, GitHub as GitHubIcon, Info as InfoIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const gitHubLink = "https://github.com/eggroll-bot";
const linkedInLink = "https://www.linkedin.com/in/brian-mak/";

function Home( ) {
	document.title = "🏠 Home";

	return (
		<div className="Home">
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

			<Grid container justifyContent="center" spacing={ 5 }>
				<Grid item>
					<RouterLink style={ { textDecoration: "none" } } to="/about-me">
						<Button startIcon={ <InfoIcon /> } variant="outlined">
							About Me
						</Button>
					</RouterLink>
				</Grid>

				<Grid item>
					<RouterLink style={ { textDecoration: "none" } } to="/portfolio">
						<Button startIcon={ <CodeIcon /> } variant="outlined">
							Portfolio
						</Button>
					</RouterLink>
				</Grid>
			</Grid>
		</div>
	);
}

export default Home;
