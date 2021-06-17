import React from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

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
		},
		overrides: {
			MuiLink: {
				underlineHover: {
					textDecoration: "underline solid transparent" // To allow for smooth link hovering.
				}
			}
		}
	} );

	return (
		<div className="App">
			<Router>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<Switch>
						<Route path="/about-me">
							<AboutMe />
						</Route>

						<Route path="/portfolio">
							<Portfolio />
						</Route>

						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</MuiThemeProvider>
			</Router>
		</div>
	);
}

export default App;
