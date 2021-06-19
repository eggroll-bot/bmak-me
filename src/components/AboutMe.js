import React from "react";
import InnerPage from "./InnerPage";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function AboutMe( ) {
	const paragraphOne = `
		Hello! Welcome to my website. I'm Brian Mak. I'm a student at the University of California, Santa Cruz campus majoring in computer science with plans
		to minor in technology and information management. I like to contribute to open source in my free time, and have an interest in software development
		and IT.
	`;
	const paragraphTwo = `
		This page is still under construction.
	`;

	return (
		<>
			<InnerPage title="👋 About Me">
				<Typography align="left" paragraph={ true } style={ { fontSize: 22, fontWeight: 400 } }>{paragraphOne}</Typography>
				<Typography align="left" paragraph={ true } style={ { fontSize: 22, fontWeight: 400 } }>{paragraphTwo}</Typography>
				<Typography align="left" paragraph={ true } style={ { fontSize: 22, fontWeight: 400 } }>Feel free to check out what I&apos;ve been up to recently. My portfolio is linked <Link to="/portfolio">here</Link>.</Typography>
			</InnerPage>
		</>
	);
}

export default AboutMe;
