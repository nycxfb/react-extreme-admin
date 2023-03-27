import React from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import Router from "@/router/index";
import AuthRoute from "@/router/auth";
import { AliveScope } from "react-activation";

const App = () => {
	return (
		<HashRouter>
			<AuthRoute>
				<AliveScope>
					<Router />
				</AliveScope>
			</AuthRoute>
		</HashRouter>
	);
};

export default App;
