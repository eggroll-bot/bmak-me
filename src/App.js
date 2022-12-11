import React from "react";
import "./App.css";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import { Router, Route } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";
import { CssBaseline } from "@mui/material";
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
		mode: "dark"
	},
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					height: "100px",
					width: "100px"
				}
			}
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					backgroundColor: "#262626"
				}
			}
		},
		MuiCardMedia: {
			styleOverrides: {
				img: {
					objectFit: "contain"
				}
			}
		},
		MuiLink: {
			defaultProps: {
				target: "_blank",
				underline: "hover"
			},
			styleOverrides: {
				underlineHover: {
					textDecoration: "underline solid transparent" // To allow for smooth link hovering.
				}
			}
		}
	},
	typography: {
		fontFamily: "\"Raleway\", sans-serif"
	}
} );

const wrapSettings = {
	restorePageStateOnPop: false
};

function App( ) {
	const history = createBrowserHistory( );
	wrapHistory( history, wrapSettings );

	return (
		<Router history={ history }>
			<CompatRouter>
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={ theme }>
						<CssBaseline />

						<FadeSwitch>
							<Route component={ AboutMe } path="/about-me" />
							<Route component={ Portfolio } path="/portfolio" />
							<Route component={ Home } path="/" />
						</FadeSwitch>
					</ThemeProvider>
				</StyledEngineProvider>
			</CompatRouter>
		</Router>
	);
}

export default App;
