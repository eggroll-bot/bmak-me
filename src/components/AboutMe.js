import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

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
		Hello! Welcome to my website. I'm Brian Mak. I'm a student at the University of California, Santa Cruz campus majoring in computer science with
		plans to minor in technology and information management. I like to create open-source side projects in my free time, and have an interest in
		software development and information technology.
		`,
		"This page is still a work-in-progress.",
		<>
		Feel free to check out what I&apos;ve been up to recently. My portfolio can be found <Link to="/portfolio">here</Link>.
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
