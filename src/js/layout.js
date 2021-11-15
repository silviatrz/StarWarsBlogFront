import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Item from "./views/item.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	//basename: la base de nuestra url
	return (
		<div className="h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/item">
							<Item />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer
						class={
							"footer-md py-3 text-center bg-dark text-light w-100 " +
							(window.location.pathname === "/item" ? "footer-bottom" : "mt-4")
						}
					/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
