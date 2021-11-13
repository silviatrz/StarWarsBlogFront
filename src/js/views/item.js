import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Item = () => {
	const { store } = useContext(Context);
	return (
		<div className="container">
			{store.character ? (
				<>
					<div className="row">
						<img className="col-4 offset-2  bg-dark" style={{ height: "300px" }} />
						<div className="col-4 offset-2">
							<h2>{store.character.name ? store.character.name : "Cargando"}</h2>
							<p>{store.character.description ? store.character.description : "Cargando"}</p>
						</div>
					</div>
					<hr className="text-danger" style={{ height: "3px" }} />
					<div className="row text-danger">
						{/*<div className="col-2">
							<h5>Name</h5>
							<p>{store.character.name ? store.character.name : "Cargando"}</p>
						</div>
						<div className="col-2">
							<h5>Birth Year</h5>
							<p>{store.character.birth_year ? store.character.birth_year : "Cargando"}</p>
						</div>
						<div className="col-2">
							<h5>Name</h5>
							<p>Luke</p>
						</div>
						<div className="col-2">
							<h5>Name</h5>
							<p>Luke</p>
						</div>
						<div className="col-2">
							<h5>Name</h5>
							<p>Luke</p>
						</div>
						<div className="col-2">
							<h5>Name</h5>
							<p>Luke</p>
			</div>*/}
						{Object.keys(store.character).map((item, index) => {
							let value = store.character[item];
							let key = item.replace("_", " ");
							if (!["created", "edited", "homeworld", "url"].includes(item)) {
								return (
									<div key={index} className="col-2">
										<h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
										<p>{value.charAt(0).toUpperCase() + value.slice(1)}</p>
									</div>
								);
							}
						})}
					</div>
				</>
			) : null}
		</div>
	);
};

export default Item;
