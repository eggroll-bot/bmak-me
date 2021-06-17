import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home.js";

function App( ) {
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
			fontFamily: "\"Raleway\", sans-serif"
		}
	} );

	return (
		<div className="App">
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Home />
			</MuiThemeProvider>
		</div>
	);
}

export default App;
