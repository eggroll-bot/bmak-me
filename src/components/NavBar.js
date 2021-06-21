import React from "react";
import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import pfpImage from "../media/pfp.png";
import PropTypes from "prop-types";

function NavBar( props ) {
	return (
		<Grid container>
			<Grid item xs={ 6 }>
				<div style={ { height: 105, padding: "15px", paddingLeft: "30px" } }>
					<Typography style={ { alignItems: "center", display: "flex", fontSize: "24px", height: 75 } }>
						{
							props.backButton ?
								<Link color="secondary" href="#" onClick={ ( ) => { window.history.back( ); } }>&lt;- Back</Link> : // TO-DO: Back button doesn't seem to work on iOS.
								<RouterLink to="/">&lt;- Home</RouterLink>
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

NavBar.propTypes = {
	backButton: PropTypes.bool
};

export default NavBar;
