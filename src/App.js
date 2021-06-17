import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Avatar, Box, Button, CssBaseline, Grid, Link, Typography } from "@material-ui/core";
import pfpImage from "./images/pfp.png";
import { Code as CodeIcon, GitHub as GitHubIcon, Info as InfoIcon, LinkedIn as LinkedInIcon } from "@material-ui/icons";

function App() {
	const theme = createMuiTheme( {
		palette: {
			type: "dark",
			primary: {
				main: "#FFF640"
			},
			secondary: {
				main: "#FF9B48"
			}
		},

		typography: {
			fontFamily: "\"Raleway\", sans-serif",
			h2: {
				fontWeight: "800"
			}
		}
	} );

	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<CssBaseline />

				<Box mb={3}>
					<Avatar alt="Eggroll Profile Picture" src={pfpImage} style={{ height: "100px", width: "100px" }}></Avatar>
				</Box>

				<Box mb={3}>
					<Typography align="center" fontWeight="fontWeightLight" gutterBottom={true} variant="h2">👋 Hey, I&apos;m Brian.</Typography>

					<Typography align="center" gutterBottom={true} variant="h4">
						Here is my&nbsp;
						<Link href="https://github.com/eggroll-bot" rel="noopener noreferrer" style={{color: "#FF845B"}} target="_blank"><GitHubIcon /> GitHub</Link>
						&nbsp;and&nbsp;
						<Link color="secondary" href="https://www.linkedin.com/in/brian-mak/" rel="noopener noreferrer" target="_blank"><LinkedInIcon /> LinkedIn</Link>
						.
					</Typography>
				</Box>

				<Grid container align="center" justify="center" spacing={5}>
					<Grid item>
						<Button color="primary" size="medium" startIcon={<InfoIcon />} variant="outlined">About Me</Button>
					</Grid>

					<Grid item>
						<Button color="primary" size="medium" startIcon={<CodeIcon />} variant="outlined">Portfolio</Button>
					</Grid>
				</Grid>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
