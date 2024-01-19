import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { Minipostman } from "./components/minipostman/Minipostman";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="minipostman" element={<Minipostman />} />
				<Route path="/" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
