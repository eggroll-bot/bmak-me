import React from "react";
import "./App.css";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { wrapRouter } from "oaf-react-router";
import { CssBaseline } from "@mui/material";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import PageNotFound from "./components/PageNotFound";

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

const router = createBrowserRouter( [
	{ path: "/", element: <Home /> },
	{ path: "/about-me", element: <AboutMe /> },
	{ path: "/portfolio/*", element: <Portfolio /> },
	{ path: "*", element: <PageNotFound /> }
] );

wrapRouter( router, wrapSettings );

function App( ) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={ theme }>
				<CssBaseline />
				<RouterProvider router={ router } />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
