import React from "react";
import { withRouter } from "react-router-dom";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import pfpImage from "../media/pfp.png";
import BackButtonContext from "../contexts/back-button-context";
import PropTypes from "prop-types";

class NavBar extends React.Component {
	render( ) {
		return (
			<Grid container>
				<Grid item xs={ 6 }>
					<div style={ { height: 105, padding: "15px", paddingLeft: "30px" } }>
						<Typography style={ { alignItems: "center", display: "flex", fontSize: "24px", height: 75 } }>
							{
								this.context ?
									<Link to={ this.context }>&lt;- Back</Link> :
									<Link to="/">&lt;- Home</Link>
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
}

NavBar.contextType = BackButtonContext;

NavBar.propTypes = {
	history: PropTypes.object.isRequired
};

export default withRouter( NavBar );
