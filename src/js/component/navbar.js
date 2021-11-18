import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	const [show, setShow] = useState(false);
	return (
		<nav className="navbar sticky-top navbar-dark bg-dark mb-3 px-5">
			<Link to="/" onClick={() => actions.resetItem()}>
				<span className="navbar-brand mb-0 h1">
					<img
						className="bg-dark w-25 ms-5"
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropstart me-5">
					<button
						className="btn btn-warning dropdown-toggle"
						onClick={() => {
							setShow(!show);
						}}>
						Favorites{" "}
						<span className="bg-dark text-white rounded-pill py-1 px-3">
							{store.favorites[0] != "(Empty)" ? store.favorites.length : 0}
						</span>
					</button>
					<ul className={"dropdown-menu " + (show ? "show" : "")}>
						{store.favorites.map((value, index) => {
							return (
								<li key={index} className="dropdown-item d-flex justify-content-between">
									<div>{value + " "}</div>
									{store.favorites[0] != "(Empty)" ? (
										<div onClick={() => actions.deleteFavorite(index)}>
											<i className="fas fa-trash" />
										</div>
									) : (
										""
									)}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
