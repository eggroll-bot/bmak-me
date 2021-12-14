import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InnerPage from "./InnerPage";
import { Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles( {
	bodyText: {
		fontSize: 22,
		fontWeight: 400,
		marginBottom: "24px",
		textAlign: "justify"
	}
} );

function AboutMe( ) {
	const classes = useStyles( );

	const paragraphs = [
		`
		Hello! Welcome to my website. I'm Brian Mak. I'm a student at the University of California, Santa Cruz majoring in computer science and minoring
		in technology and information management. I like to create open-source side projects in my free time, and have an interest in software development.
		`,
		`
		I also like to learn about and try out new technologies. This website is my first project built in React. You can check out my most recent projects
		in my portfolio linked below.
		`,
		`
		In the short term, before I get my bachelor's degree, I'm looking to land a software engineering internship. After I get my degree, I am
		considering either finding work in the software engineering industry or pursuing a master's degree in computer science.
		`,
		<>
			Wanna see what I&apos;ve been up to recently? Feel free to check out my portfolio. My portfolio and résumé can be found&nbsp;
			<RouterLink to="/portfolio">here</RouterLink>
			.
		</>,
		<>
			If you want to reach out to me, feel free to contact me by email at&nbsp;
			<Link color="secondary" href="mailto:brian@bmak.xyz">brian@bmak.xyz</Link>
			.
		</>
	];

	return (
		<InnerPage title="👋 About Me">
			{ paragraphs.map( ( item, index ) => (
				<Typography align="left" className={ classes.bodyText } key={ index }>
					{ item }
				</Typography>
			) ) }
		</InnerPage>
	);
}

export default AboutMe;
