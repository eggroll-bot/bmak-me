import React from "react";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import pfpImage from "../media/pfp.png";
import BackButtonContext from "../contexts/back-button-context";

function NavBar( ) {
	const backButtonContext = React.useContext( BackButtonContext );

	return (
		<Grid container>
			<Grid item xs={ 6 }>
				<div style={ { height: 105, padding: "15px", paddingLeft: "30px" } }>
					<Typography style={ { alignItems: "center", display: "flex", fontSize: "24px", height: 75 } }>
						{
							backButtonContext ?
								<Button color="secondary" component={ RouterLink } style={ { fontSize: "20px" } } to={ backButtonContext }>&lt;- Back</Button> :
								<Button color="secondary" component={ RouterLink } style={ { fontSize: "20px" } } to="/">&lt;- Home</Button>
						}
					</Typography>
				</div>
			</Grid>

			<Grid item xs={ 6 }>
				<div style={ { float: "right", height: 105, width: 120, padding: "15px", paddingRight: "30px" } }>
					<Avatar alt="Profile Picture" className="avatar" src={ pfpImage } style={ { height: 75, width: 75 } } />
				</div>
			</Grid>
		</Grid>
	);
}

export default NavBar;
