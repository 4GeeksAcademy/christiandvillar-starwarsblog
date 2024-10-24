import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Asegúrate de ajustar la ruta correctamente

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
			</Link>
			<div className="ml-auto d-flex align-items-center">
				<Link to="/favorites" className="btn btn-outline-warning me-2">
					Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
