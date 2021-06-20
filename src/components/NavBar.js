import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import pfpImage from "../media/pfp.png";

function NavBar( ) {
	return (
		<Grid container>
			<Grid item xs={ 6 }>
				<div style={ { height: 105, padding: "15px", paddingLeft: "30px" } }>
					<Typography style={ { alignItems: "center", display: "flex", fontSize: "24px", height: 75 } }>
						<Link to="/">&lt;- Home</Link>
					</Typography>
				</div>
			</Grid>

			<Grid item xs={ 6 }>
				<div style={ { float: "right", height: 105, width: 120, padding: "15px", paddingRight: "30px" } }>
					<Avatar alt="Profile Picture" className="Avatar" src={ pfpImage } style={ { height: 75, width: 75 } } />
				</div>
			</Grid>
		</Grid>
	);
}

export default NavBar;
