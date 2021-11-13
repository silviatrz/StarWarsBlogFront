import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="bg-dark w-25"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary">Favorites</button>
			</div>
		</nav>
	);
};
