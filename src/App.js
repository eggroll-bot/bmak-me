import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { Typography } from "@material-ui/core";

function App() {
	const theme = createMuiTheme( {
		palette: {
			type: "dark",
		}
	} );

	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Typography variant="h2" gutterBottom={true}>Welcome to my portfolio.</Typography>
				<Typography variant="h3">I&apos;m Brian.</Typography>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
