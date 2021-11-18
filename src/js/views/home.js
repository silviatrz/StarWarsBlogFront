import React, { useContext } from "react";
import "../../styles/home.scss";
import Card from "../component/card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="mt-5">
			<h2 className="text-danger pt-1 p-4">Characters</h2>
			<Card data={store.characters} />
			<h2 className="text-danger p-4">Planets</h2>
			<Card data={store.planets} />
			<h2 className="text-danger p-4">Vehicles</h2>
			<Card data={store.vehicles} />
		</div>
	);
};
