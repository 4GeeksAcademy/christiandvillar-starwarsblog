import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const StarshipDetails = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    setStarship(data.result.properties);
                } else {
                    console.error("No se encontraron datos para la nave con ID:", id);
                }
            })
            .catch(error => console.error("Error fetching starship details:", error));
    }, [id]);

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>{starship.name}</h1>
            <ul>
                <li><strong>Modelo:</strong> {starship.model}</li>
                <li><strong>Fabricante:</strong> {starship.manufacturer}</li>
                <li><strong>Clase de nave:</strong> {starship.starship_class}</li>
                <li><strong>Costo en créditos:</strong> {starship.cost_in_credits}</li>
                <li><strong>Longitud:</strong> {starship.length}</li>
                <li><strong>Tripulación:</strong> {starship.crew}</li>
                <li><strong>Pasajeros:</strong> {starship.passengers}</li>
                <li><strong>Velocidad máxima:</strong> {starship.max_atmosphering_speed}</li>
                <li><strong>Clasificación de hipervínculo:</strong> {starship.hyperdrive_rating}</li>
                <li><strong>Capacidad de carga:</strong> {starship.cargo_capacity}</li>
                <li><strong>Consumibles:</strong> {starship.consumables}</li>
                
            </ul>
            <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
            Volver a Home
            </button>
        </div>
    );
};