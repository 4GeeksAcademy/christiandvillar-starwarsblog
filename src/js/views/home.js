import React, { useContext } from "react";
import { Context } from "../store/appContext"; 
import CardItem from "../component/CardItem";
import "../../styles/home.css"; // Puedes personalizar los estilos aquí

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<h1 className="mb-4">Welcome to the Star Wars Database</h1>
			
			{/* Sección de Personajes */}
			<h2>People</h2>
			<div className="row d-flex flex-wrap justify-content-center mb-5">
				{store.people.length > 0 ? (
					store.people.map((person) => (
						<div key={person.uid} className="col-md-3 mb-4">
							<CardItem item={person} type="characters" />
						</div>
					))
				) : (
					<p>Loading People...</p>
				)}
			</div>

			{/* Sección de Vehículos */}
			<h2>Vehicles</h2>
			<div className="row d-flex flex-wrap justify-content-center mb-5">
				{store.vehicles.length > 0 ? (
					store.vehicles.map((vehicle) => (
						<div key={vehicle.uid} className="col-md-3 mb-4">
							<CardItem item={vehicle} type="vehicles" />
						</div>
					))
				) : (
					<p>Loading Vehicles...</p>
				)}
			</div>

			{/* Sección de Planetas */}
			<h2>Planets</h2>
			<div className="row d-flex flex-wrap justify-content-center">
				{store.planets.length > 0 ? (
					store.planets.map((planet) => (
						<div key={planet.uid} className="col-md-3 mb-4">
							<CardItem item={planet} type="planets" />
						</div>
					))
				) : (
					<p>Loading Planets...</p>
				)}
			</div>
		</div>
	);
};
