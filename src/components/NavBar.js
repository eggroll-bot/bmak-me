import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
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
		</Grid>
	);
}

export default NavBar;
