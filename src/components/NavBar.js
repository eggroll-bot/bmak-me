import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Avatar, Grid, Typography } from "@material-ui/core";
import HomeButton from "./HomeButton";
import pfpImage from "../images/pfp.png";
import PropTypes from "prop-types";

// TO-DO: Change rendering of home button to be below title if screen is too small.

function NavBar( props ) {
	const theme = useTheme( );

	return (
		<div className="NavBar" style={ { backgroundColor: theme.palette.background.paper } }>
			<Grid container>
				<Grid item xs={ 2 }>
					<HomeButton padding="15px" />
				</Grid>

				<Grid item xs={ 8 }>
					<Typography align="center" style={ { alignItems: "center", display: "flex", fontWeight: 800, height: "100%", justifyContent: "center" } } variant="h2">{props.title || document.title}</Typography>
				</Grid>

				<Grid item xs={ 2 }>
					<div style={ { float: "right", height: 105, width: 105, padding: "15px" } }>
						<Avatar alt="Profile Picture" className="Avatar" src={ pfpImage } style={ { height: 75, width: 75 } }></Avatar>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

NavBar.propTypes = {
	title: PropTypes.string
};

export default NavBar;
