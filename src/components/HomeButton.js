import React from "react";
import { Avatar } from "@material-ui/core";
import pfpImage from "../images/pfp.png";

function HomeButton( ) {
	return (
		<div className="HomeButton">
			<Avatar alt="Home Button" className="Avatar" src={pfpImage} style={ { height: "100px", width: "100px" } }></Avatar>
		</div>
	);
}

export default HomeButton;
