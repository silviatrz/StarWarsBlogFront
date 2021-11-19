import React, { useContext } from "react";
import PropTypes, { number } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/generic.png";

const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid card-group card-group-starwars text-center pb-4">
			{props.data
				? props.data.map((value, index) => {
						return (
							<div className="card px-0 mx-4 col rounded" key={index} style={{ minWidth: "350px" }}>
								<img
									className="card-img-top bg-dark"
									src={starwars}
									alt="..."
									style={{ height: "200px" }}
								/>
								<div className="card-body">
									<h5 className="card-title">{value.name}</h5>
									<div className="d-flex justify-content-between">
										<Link to="/item" onClick={() => localStorage.setItem("url", value.url)}>
											<span className="btn btn-outline-primary">Learn More!</span>
										</Link>
										<a className="btn btn-outline-warning">
											<span onClick={() => actions.addFavorite(value.name, value.url)}>
												<i className="far fa-heart" />
											</span>
										</a>
									</div>
								</div>
							</div>
						);
				  })
				: "Cargando"}
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.array
};

export default Card;
