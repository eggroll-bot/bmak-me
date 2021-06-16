import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Box, Button, CssBaseline, Grid, Typography } from "@material-ui/core";
import { Code as CodeIcon, /*GitHub as GitHubIcon,*/ Info as InfoIcon, /*LinkedIn as LinkedInIcon*/ } from "@material-ui/icons";

function App() {
	const theme = createMuiTheme( {
		palette: {
			type: "dark",
			primary: {
				main: "#27ae60"
			}
		}
	} );

	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<CssBaseline />

				<Box mb={3}>
					<Typography align="center" variant="h2" gutterBottom={true}>👋 Hey, I&apos;m Brian.</Typography>
				</Box>

				<Box mb={3}>
					<Grid container align="center" justify="center" spacing={5}>
						<Grid item>
							<Button color="primary" size="medium" startIcon={<InfoIcon />} variant="outlined">About Me</Button>
						</Grid>

						<Grid item>
							<Button color="primary" size="medium" startIcon={<CodeIcon />} variant="outlined">Portfolio</Button>
						</Grid>
					</Grid>
				</Box>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
