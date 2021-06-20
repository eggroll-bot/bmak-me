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
		Hello! Welcome to my website. I'm Brian Mak. I'm a student at the University of California, Santa Cruz majoring in computer science with plans
		to minor in technology and information management. I like to create open-source side projects in my free time, and have an interest in software
		development and system administration.
		`,
		`
		In the short term, before I get my bachelor's degree, I'm looking to land a software engineering internship. After I get my degree, I am
		considering either working in the software engineering industry or pursuing a master's degree in computer science.
		`,
		`
		During the academic year, I am seeking tutoring positions for computer science courses. During my first year at UC Santa Cruz, I tutored for a
		computer systems and assembly language course. Tutoring for that course turned out to be quite rewarding. As tutors, we're not expected to know
		everything there is to know about the course's topics, but we are expected to have a good understanding of them. Tutoring for that course solidified
		my understanding of the course's topics and filled in the gaps. It also helped me further develop my communication and problem-solving skills. I
		hope to take these skills with me down whichever path I decide to take in the future.
		`,
		<>
			Wanna know what I&apos;ve been up to recently? Feel free to check out my portfolio. My portfolio and résumé can be found&nbsp;
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
				<Typography align="left" className={ classes.bodyText } key={ index } paragraph={ true }>
					{ item }
				</Typography>
			) ) }
		</InnerPage>
	);
}

export default AboutMe;
