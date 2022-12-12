import React from "react";
import "./PageNotFound.css";
import { Helmet } from "react-helmet";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function PageNotFound( ) {
	return (
		<div className="PageNotFound">
			<Helmet>
				<title>404 Not Found</title>
			</Helmet>

			<Typography gutterBottom align="center" style={ { fontWeight: 800 } } variant="h2">
                💔 404 Not Found
			</Typography>

			<Typography gutterBottom align="center" style={ { fontWeight: 600 } } variant="h4">
				Sorry, the page you are looking for does not exist.
			</Typography>

			<Button component={ RouterLink } style={ { fontSize: "18px" } } sx={ { m: 2 } } to="/" variant="outlined">Go Home</Button>
		</div>
	);
}

export default PageNotFound;
