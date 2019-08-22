import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
};

export default App;
