import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot( document.getElementById( "root" ) );

root.render(
	// TODO: React StrictMode is broken with React Router v5. Upgrade to v6.
	//<React.StrictMode>
	<App />
	//</React.StrictMode>
);
