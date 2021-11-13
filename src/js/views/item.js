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
						<img
							className="col-4 offset-2"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
							style={{ height: "300px" }}
						/>
						<div className="col-4 offset-2">
							<h2 className="text-light">{store.character.properties.name}</h2>
							<p className="text-light">{store.character.description}</p>
						</div>
					</div>
					<hr className="text-danger" style={{ height: "3px" }} />
					<div className="row text-danger">
						{Object.keys(store.character.properties).map((item, index) => {
							let value = store.character.properties[item];
							let key = item.replace("_", " ");
							if (
								![
									"created",
									"edited",
									"homeworld",
									"url",
									"mass",
									"hair_color",
									"gravity",
									"terrain",
									"surface_water"
								].includes(item)
							) {
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
