import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route } from "react-router-dom";
import { AnimatedSwitch, spring } from "react-router-transition";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function fade( value ) {
	return spring( value, {
		stiffness: 275,
		damping: 25,
	} );
}

const theme = createMuiTheme( {
	palette: {
		background: {
			default: "#242424",
			paper: "#333333"
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
		MuiLink: {
			underlineHover: {
				textDecoration: "underline solid transparent" // To allow for smooth link hovering.
			}
		}
	}
} );

function App( ) {
	const fadeTransition = {
		atEnter: {
			opacity: 0
		},
		atLeave: {
			opacity: fade( 0 )
		},
		atActive: {
			opacity: fade( 1 )
		},
	};

	return (
		<HashRouter>
			<MuiThemeProvider theme={ theme }>
				<CssBaseline />
				<AnimatedSwitch atActive={ fadeTransition.atActive } atEnter={ fadeTransition.atEnter } atLeave={ fadeTransition.atLeave } className="switch-wrapper">
					<Route path="/about-me">
						<AboutMe />
					</Route>

					<Route path="/portfolio">
						<Portfolio />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</AnimatedSwitch>
			</MuiThemeProvider>
		</HashRouter>
	);
}

export default App;
