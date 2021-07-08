import React from "react";
import "./App.css";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { createHashHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import { Router, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import FadeSwitch from "./components/FadeSwitch";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

const theme = createTheme( {
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

const wrapSettings = {
	restorePageStateOnPop: false
};

function App( ) {
	const history = createHashHistory( );
	wrapHistory( history, wrapSettings );

	return (
		<Router history={ history }>
			<MuiThemeProvider theme={ theme }>
				<CssBaseline />

				<FadeSwitch>
					<Route component={ AboutMe } path="/about-me" />
					<Route component={ Portfolio } path="/portfolio" />
					<Route component={ Home } path="/" />
				</FadeSwitch>
			</MuiThemeProvider>
		</Router>
	);
}

export default App;
