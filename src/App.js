import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import FadeSwitch from "./components/FadeSwitch";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

const theme = createMuiTheme( {
	palette: {
		background: {
			default: "#1A1A1A",
			paper: "#2E2E2E"
		},
		primary: {
			main: "#FFF640"
		},
		secondary: {
			main: "#FF9B48"
		},
		type: "dark"
	},
	typography: {
		fontFamily: "\"Raleway\", sans-serif"
	},
	overrides: {
		MuiAvatar: {
			root: {
				height: "100px",
				width: "100px"
			}
		},
		MuiCardContent: {
			root: {
				backgroundColor: "#262626"
			}
		},
		MuiCardMedia: {
			img: {
				objectFit: "contain"
			}
		},
		MuiLink: {
			underlineHover: {
				textDecoration: "underline solid transparent" // To allow for smooth link hovering.
			}
		}
	}
} );

// TO-DO: Add scrolling restoration. See https://github.com/trevorr/react-scroll-manager. Package is already installed.

function App( ) {
	return (
		<HashRouter>
			<MuiThemeProvider theme={ theme }>
				<CssBaseline />

				<FadeSwitch>
					<Route component={ AboutMe } path="/about-me" />
					<Route component={ Portfolio } path="/portfolio" />
					<Route component={ Home } path="/" />
				</FadeSwitch>
			</MuiThemeProvider>
		</HashRouter>
	);
}

export default App;
