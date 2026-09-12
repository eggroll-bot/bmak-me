import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
import { Box, Link, Typography } from "@mui/material";
import { Article as ArticleIcon, Construction as ConstructionIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";

const gitHubLink = "https://github.com/eggroll-bot";
const linkedInLink = "https://www.linkedin.com/in/brian-mak/";
const resumeLink = "/resume.pdf";

function Home( ) {
	return (
		<div className="Home">
			<Helmet>
				<title>🏠 Home | Brian Mak</title>
				<meta content="Brian Mak's personal website with an about me page and a portfolio." name="description" />
			</Helmet>

			<Box mb={ 3 }>
				<Typography gutterBottom align="center" style={ { fontWeight: 800 } } variant="h2">
					👋 Hey, I&apos;m Brian.
				</Typography>

				<Typography gutterBottom align="center" variant="h4">
					Here is my&nbsp;

					<Link color="secondary" href={ gitHubLink } rel="noopener noreferrer">
						<GitHubIcon /> GitHub
					</Link>

					,&nbsp;

					<Link color="secondary" href={ linkedInLink } rel="noopener noreferrer">
						<LinkedInIcon /> LinkedIn
					</Link>

					, and&nbsp;

					<Link color="secondary" href={ resumeLink } rel="noopener noreferrer">
						<ArticleIcon /> Resume
					</Link>

					.
				</Typography>
			</Box>

			<Box mb={ 3 }>
				<Typography gutterBottom align="center" variant="h4">
					<ConstructionIcon color="secondary" />
					&nbsp;
					This site is under construction.
					&nbsp;
					<ConstructionIcon color="secondary" />
				</Typography>
			</Box>
		</div>
	);
}

export default Home;
