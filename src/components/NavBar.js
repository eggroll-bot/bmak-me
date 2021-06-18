import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HomeButton from "./HomeButton";
import PropTypes from "prop-types";

function NavBar( props ) {
	return (
		<div className="NavBar" style={ { backgroundColor: "#474747" } }>
			<Grid container>
				<Grid item xs={ 2 }>
					<HomeButton padding="15px" />
				</Grid>

				<Grid item xs={ 8 }>
					<Typography align="center" style={ { alignItems: "center", display: "flex", fontWeight: 800, height: "100%", justifyContent: "center" } } variant="h2">{props.title || document.title}</Typography>
				</Grid>

				<Grid item xs={ 2 } />
			</Grid>
		</div>
	);
}

NavBar.propTypes = {
	title: PropTypes.string
};

export default NavBar;
