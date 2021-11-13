import React, { useContext } from "react";
import "../../styles/home.scss";
import Card from "../component/card.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<Card data={store.characters} />
			<Card data={store.planets} />
		</div>
	);
};
